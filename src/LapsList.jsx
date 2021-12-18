import React from 'react'
import Lap from './Lap'

const LapsList = ({ laps }) => {
    return (
        <div>            
            {laps.map((lap) => (
                <Lap key={lap.id} position={lap.position} id={lap.id} result={lap.result}/>
            ))}
        </div>
    )
}

export default LapsList