import React from 'react'
import './Control.css'

const Controls = ({ onStartHandler, onPauseHandler, onLapHandler, onResetHandler }) => {
    return (
        <div className='control-block'>
            <button className='control-btn' onClick={onStartHandler}>Start</button>
            <button className='control-btn' onClick={onPauseHandler}>Pause</button>
            <button className='control-btn' onClick={onLapHandler}>Lap</button>
            <button className='control-btn' onClick={onResetHandler}>Reset</button>
        </div>
    )
}

export default Controls