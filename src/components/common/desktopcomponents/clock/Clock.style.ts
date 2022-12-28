import styled from "styled-components";
import DesktopBlurElement from "../desktopblurelement/DesktopBlurElement.style";

const StyledClock = styled(DesktopBlurElement)`
    display: flex;
    align-items: center;
    width: auto;
    border-radius: 20px;
    padding: 20px;
    height: 42px;
    margin-left: auto;
    margin-right: 30px;
    position: relative;

    
    & .time_display {
        color: #fff;
        font-size: 30px;
        text-align: center;
        position: relative;
        margin-right: 20px;
    }

    & .time_display::after {
        display: block;
        content: '';
        min-width: 1px;
        min-height: 25px;
        background-color: #fff;
        position: absolute;
        top: 6px;
        left: 110%;
    }

    & .show_more {
        width: 100%;
        min-height: 100%;
        color: #fff;
        background-color: transparent;
        border: none;
        transform: rotate(270deg);
        font-size: 20px;
        transition: .3s;
        cursor: pointer;
    }

    & .show_more:hover {

        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        transform: translateY(-5px) rotate(270deg);
    }

`

export default StyledClock;