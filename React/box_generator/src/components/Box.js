import React from 'react'

const Box = ({color}) =>
{
    const boxColor = 
    {
        backgroundColor: [color],
        width: "200px",
        height: "200px",
        display: "inline-block",
        marginRight: '10px',
    };
    return <div style={boxColor}></div>
    
}
export default Box