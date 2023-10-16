import { useCallback, useRef, useState } from "react"

export const useInputDebaunce = (startValue, timeout, callBack, callBackArgs) => {
    const [value, setValue] = useState(startValue);
    const timer = useRef();

    const onChange = async (e) => {
        setValue(e.target.value)

        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(async () => {
            callBack(value, ...callBackArgs)
        }, timeout * 1000);

    }

    return { value, onChange }
}

export const useDebaunce = (callBack, delay) => {
    const timer = useRef();

    const debouncedCallBack = useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        setTimeout(() => {
            callBack(...args)
        }, delay);
    }, [callBack, delay]);

    return debouncedCallBack;
}