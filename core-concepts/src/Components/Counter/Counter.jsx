import React from 'react'

import "./counter.css"

class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            currentValue: 0
        }
    }

    increment = () => {
        this.setState((prevState) => {
            return{
                currentValue: prevState.currentValue + 1
            }
        })
    }

    decrement = () => {
        this.setState((prevState) => {
            return{
                currentValue: prevState.currentValue - 1
            }
        })
    }

    render(){
        const {currentValue} = this.state

        return(
            <div className="counter">
                <div className="counter-value">{currentValue}</div>
                <div className='counter-controls'>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }   
}

export default Counter