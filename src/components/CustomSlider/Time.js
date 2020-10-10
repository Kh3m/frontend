import React from 'react'
const Time = ({ min, hour, position, trail }) => {
    const style = {
        time: {
            padding: "16px",
            fontFamily: "Verdana",
            position: "absolute",
            top: "-50px",
            [position]: 0
        }
    }

    return <div style={style.time}>
        <span id="hour">{hour}</span>
        :
        <span id="min">{min}{trail}</span>
    </div>
}

export default Time;