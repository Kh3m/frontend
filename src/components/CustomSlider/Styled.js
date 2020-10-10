import styled from 'styled-components'


export const SliderWrapper = styled.div`
            position: relative;
            width: 50%;
            max-width: 500px;
    `
export const Slider = styled.div`
            position: relative;
            z-index: 1;
            height: 10px;
            margin: 0 15px;
    `
export const Track = styled.div`
            position: absolute;
            z-index: 1;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            border-radius: 5px;
            background-color: #c6aee7;
    `
export const Range = styled.div`
            position: absolute;
            z-index: 2;
            left:0;
            right: 0;
            top: 0;
            bottom: 0;
            border-radius: 5px;
            background-color: #6200ee;
`
export const Thumb = styled.div`
            position: absolute;
            z-index: 3;
            width: 30px;
            height: 30px;
            background-color: #6200ee;
            border-radius: 50%;
            box-shadow: 0 0 0 rgba(98, 0, 28, .1);
            transition: box-shadow .3s ease-in-out;
             ${props => props.left && `
                left: 0;
                transform: translate(0px, -10px);
             `}
             ${props => props.right && `
                right: 0;
                transform: translate(0px, -10px);
             `}  
             &:hover {
                box-shadow: 0 0 0 20px rgba(98, 0, 28, .1);
                }
                &:active{
                    box-shadow: 0 0 0 40px rgba(98, 0, 28, .2); 
                }
`
export const Input = styled.input.attrs({ type: 'range' })`
                position: absolute;
                z-index: 2;
                height: 10px;
                width: 100%;
                appearance: none;
                -webkit-appearance: none;
                pointer-events: none;
                opacity: 0;
                &::-webkit-slider-thumb{
                    width: 30px;
                    height: 30px;
                    border-radius: 0;
                    border: 0 none;
                    background-color: red;
                    -webkit-appearance: none;
                    pointer-events: all;
                }  
`

export const DateDiv = styled.div`
                padding: 16px;
                font-family: sans-serif;
                position: absolute;
                top: -50px;
                ${props => props.dateLeft && `left: 0`}
                ${props => props.dateRight && `right: 0`}
`

