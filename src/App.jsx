import { useRef } from 'react';
import './App.css';
import { Square } from './components/Square';
import { Todo } from './components/Todo';
import { useInput } from './hooks/useInput';
import { usePageination } from './hooks/usePageination';
import { useInputDebaunce } from './hooks/useDebaunce';
import { useRequest } from './hooks/useRequest';
import axios from 'axios';
function App() {
  const input = useInput();

  const parentRef = useRef(null);

  const { data: todos } = usePageination(parentRef, 'https://jsonplaceholder.typicode.com/todos', 10, 1);

  const searchInput = async (value, link) => {
    const response = await fetch(link + `?query=${value}`)
    const json = await response.json(); // do  what you need
  }

  const debounce = useInputDebaunce('', 0.5, searchInput, ['https://jsonplaceholder.typicode.com/todos'])


  const getTodos = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
  }

  const [data, isLoading, error] = useRequest(getTodos)

  return (
    <div className="App">
      <input {...input} style={{ margin: '10px' }} />
      <input type="text"  {...debounce} />
      <Square />
      <div style={{ width: '700px', height: '400px', overflow: 'auto', boxShadow: '0 0 20px -10px', margin: '50px auto' }} ref={parentRef}>
        {
          isLoading ? <h3>Loading...</h3> : error ? <h2 style={{ color: 'crimson' }}>{error.message}</h2> : data && data.data.map(todo => <Todo title={todo.title} key={todo.id} />)
        }
      </div>
      <div style={{ width: '700px', height: '400px', overflow: 'auto', boxShadow: '0 0 20px -10px', margin: '50px auto' }} ref={parentRef}>
        {todos.map(todo => <Todo title={todo.title} key={todo.id} />)}
      </div>

    </div>
  );
}

export default App;
