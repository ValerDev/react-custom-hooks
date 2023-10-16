import { useEffect, useState } from "react"

export const usePageination = (parent, link, limit, _page) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(_page);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(link + `?_limit=${limit}&_page=${page}`)
            const json = await response.json();
            setData([...data, ...json])
        }

        getData()
        if (parent.current) {
            parent.current.addEventListener('scroll', () => {
                if (parent.current.scrollHeight - parent.current.scrollTop === parent.current.clientHeight) {
                    setPage(page + 1)
                    return
                }
            })
        }

        return () => {
            parent.current.removeEventListener('scroll', null)
        }
    }, [page])


    return { data }
}