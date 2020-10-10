import React from 'react'
const RangeSlide = ({ minVal, maxVal, position, trail }) => {
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
        <span id="hour">{trail}{minVal}</span>
        <span id="min">{maxVal}</span>

    </div>
}

export default RangeSlide;