import { useState } from 'react'
import './App.css';

const Clock = () => {
    let time = new Date().toLocaleTimeString()
    const [currentTime, setCurrentTime] = useState(time)
    
    const updateTime = () => {
        let time = new Date().toLocaleTimeString()
        setCurrentTime(time)
    }

    setInterval(updateTime, 1000)
    
    return (
        <div>
            <h1 className='big'>{currentTime}</h1>
        </div>
    )
}

export default Clock