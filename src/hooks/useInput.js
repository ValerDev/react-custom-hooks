import { useState } from "react"

export const useInput = (startValue = '') => {
    const [value, setValue] = useState(startValue);
    
    const onChange = (e) => {
        setValue(e.target.value);
    };

    return {value, onChange};
}