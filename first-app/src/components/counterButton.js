import React from 'react'

const CounterButton = (props) => {
    return (
        <button onClick={props.handleClick}>Birthday Button for {props.count}</button>
    );
}

export default CounterButton