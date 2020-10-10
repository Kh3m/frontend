import React, { useState } from 'react'
import styles from "./CustomRangeSlider.module.css";
import RangeSlide from './RangeSlider';
import Time from "./Time";

const TimeRangeSlider = ({ minValue, maxValue, type, trailingStr }) => {
    const [leftValue, setLeftValue] = useState(parseInt(minValue));
    const [rightValue, setRightValue] = useState(parseInt(maxValue));
    const [percentageRight, setPercentageRight] = useState(0);
    const [percentageLeft, setPercentageLeft] = useState(0);

    const setLeftValueHandler = (event) => {
        const min = parseInt(event.target.min);
        const max = parseInt(event.target.max);
        const value = Math.min(parseInt(event.target.value), parseInt(rightValue) - 1);
        const percentage = ((leftValue - min) / (max - min)) * 100;
        setPercentageLeft(percentage + "%");
        setLeftValue(value);
    }

    const setRightValueHandler = (event) => {
        const min = parseInt(event.target.min);
        const max = parseInt(event.target.max);
        const value = Math.max(parseInt(event.target.value), parseInt(leftValue) + 1);
        const percentage = ((rightValue - min) / (max - min)) * 100;
        setPercentageRight((100 - percentage) + "%");
        setRightValue(value)
    }

    const prepend = (n) => {
        return n > 9 ? n : "0" + n;
    }
    const append = (n) => {
        return n < 720 ? "am" : "pm"
    }
    return (
        <div className={styles.container}>
            <div className={styles.middle}>
                <div className={styles.multiRangeSlider}>
                    <input
                        onInput={setLeftValueHandler}
                        onChange={setLeftValueHandler}
                        className={[styles.input, styles.rangeLeft].join(" ")}
                        type="range" id="input-left" min={minValue} step="1" max={maxValue}
                        value={leftValue} />
                    <input
                        onInput={setRightValueHandler}
                        onChange={setRightValueHandler}
                        className={[styles.input, styles.rangeRight].join(" ")}
                        type="range" id="input-right" min={minValue} step="1" max={maxValue}
                        value={rightValue} />

                    <div className={styles.slider}>
                        <div className={styles.track}></div>
                        <div
                            style={{ left: percentageLeft, right: percentageRight }}
                            className={styles.range}>
                        </div>
                        <div
                            style={{ left: percentageLeft }}
                            className={[styles.thumb, styles.left].join(" ")}></div>
                        <div
                            style={{ right: percentageRight }}
                            className={[styles.thumb, styles.right].join(" ")}></div>
                    </div>
                </div>
                {type === "time" ?
                    <>
                        <Time
                            position="left"
                            // sec={Math.floor(Number((leftValue % 3600) % 60).toFixed(2))}
                            hour={prepend(((Math.floor(leftValue / 60) + 11) % 12 + 1))}
                            min={prepend(Math.floor(leftValue % 60))}
                            trail={append(leftValue)}
                        />
                        <Time
                            position="right"
                            // sec={Math.floor(Number((rightValue % 3600) % 60).toFixed(2))}
                            hour={prepend(((Math.floor(rightValue / 60) + 11) % 12 + 1))}
                            min={prepend(Math.floor(rightValue % 60))}
                            trail={append(rightValue)}
                        /> </> :
                    <>
                        <RangeSlide
                            position="left"
                            minVal={leftValue}
                            trail={trailingStr}
                        />
                        <RangeSlide
                            position="right"
                            maxVal={rightValue}
                            trail={trailingStr}
                        />
                    </>
                }

            </div>
        </div>
    )
}

export default TimeRangeSlider;