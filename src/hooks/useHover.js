import { useEffect, useState } from "react"

export const useHover = (ref) => {
    const [isHover, setIsHover] = useState(false);

    const on = () => setIsHover(true);
    const off = () => setIsHover(false);
    useEffect(() => {
        if(!ref.current) return

        const element = ref.current;
        element.addEventListener('mouseenter', on);
        element.addEventListener('mouseleave', off);
        element.addEventListener('mousemove', on);
        return () => {
            element.removeEventListener('mouseenter', on);
            element.removeEventListener('mouseleave', off);
            element.removeEventListener('mousemove', on);
        }
    })
    

    return isHover
}