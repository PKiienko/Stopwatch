import React from 'react'
import './Display.css'

const Display = ({ time }) => {

    return (
        <div className='time'>
            <div className='time-unit'>{(time.hh >= 10) ? time.hh : "0" + time.hh}</div>:
            <div className='time-unit'>{(time.mm >= 10) ? time.mm : "0" + time.mm}</div>:
            <div className='time-unit'>{(time.ss >= 10) ? time.ss : "0" + time.ss}</div>:
            <div className='time-unit'>{(time.ms >= 10) ? time.ms : "0" + time.ms}</div>
        </div>
    )
}

export default Display