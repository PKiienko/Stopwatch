import React from 'react'
import './Lap.css'

const Lap = (lap) => {
    return (
        <div>            
            {/* <p>{lap.id}:</p> */}
            <h4>
                <span>#{lap.position} </span>
                <span>{(lap.result.hours >= 10) ? lap.result.hours : "0" + lap.result.hours}</span>:
                <span>{(lap.result.minutes >= 10) ? lap.result.minutes : "0" + lap.result.minutes}</span>:
                <span>{(lap.result.seconds >= 10) ? lap.result.seconds : "0" + lap.result.seconds}</span>:
                <span>{(lap.result.miliseconds >= 10) ? lap.result.miliseconds : "0" + lap.result.miliseconds}</span>
            </h4>
        </div>
    )
}

export default Lap