import React from 'react'
import List from './List'
const Car = (props) => {
    function btnclick() {
        alert(props.number)
    }
    return (

        <>
            <h1>list from fucntional component</h1>
            <h3>Number of cars : {props.number}</h3>
            <button onClick={btnclick} >Click me!</button>
            {props.cars.map((item) => <p>{item}</p>)}
        </>);
}
export default Car;