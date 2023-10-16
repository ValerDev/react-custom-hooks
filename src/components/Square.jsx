import React, { useRef } from "react";
import { useHover } from "../hooks/useHover";

export const Square = () => {
    const squareRef = useRef(null);
    const isHover = useHover(squareRef)
    return <div style={{ width: '150px', height: '150px', transition: '.3s', backgroundColor: isHover ? 'red' : 'blue', margin: '10px' }} ref={squareRef}></div>
}