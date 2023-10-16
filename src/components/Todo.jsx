import React from "react";

export const Todo = ({title}) => {
    return <div style={{ padding: '10px 15px', border: '2px solid black', margin: '10px', width: 'max-content'}}>
        {title}
    </div>
}