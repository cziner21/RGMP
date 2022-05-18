import { React, useState } from 'react'
import './App.css'
import { Counter, Search, ToggleSwitch } from './Components/index'

function App() {
    const [isMale, setIsMale] = useState(true)

    function handletoggle() {
        setIsMale(!isMale)
    }

    return (
        <div className="app">
            <h1>Hello World</h1>
            <Counter />
            <Search />
            <ToggleSwitch
                isChecked={isMale}
                onHandleToggle={handletoggle}
                offText={'♀'}
                onText={'♂'}
            />
            <div>Gender: {isMale ? 'Male' : 'Female'}</div>
        </div>
    )
}

export default App
