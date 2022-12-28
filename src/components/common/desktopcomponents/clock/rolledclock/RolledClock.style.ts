import styled from "styled-components";
import DesktopBlurElement from "../../desktopblurelement/DesktopBlurElement.style";

interface StyledRolledClockProps {
    isVisible: boolean,
}

const StyledRolledClock = styled(DesktopBlurElement)<StyledRolledClockProps>`
    display: ${props => props.isVisible ? "block" : "none"};
    position: absolute;
    bottom: 55px;
    right: 0;
    width: 240px;
    height: 200px;
    border-radius: 25px;
    padding: 10px;
    transition: .3s;

    & .time_display_rolled {
        color: #fff;
        font-size: 50px;
        text-align: center;
        width: 100%;
    }

    & .date_display {
        margin: 6px;
        color: #fff;
        font-size: 26px;
        letter-spacing: 2px;
        opacity: 80%;
        text-align: center;
    }

`

export default StyledRolledClock;