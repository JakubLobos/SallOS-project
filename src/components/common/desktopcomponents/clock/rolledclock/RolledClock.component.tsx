import { FC } from "react";
import StyledRolledClock from "./RolledClock.style";

interface RolledClockProps {
    time: string,
    day: string,
    isVisible: boolean,
    month: string,
}

const RolledClock:FC<RolledClockProps> = (props) => {



    return (
        <StyledRolledClock isVisible={props.isVisible}>
            <p className="time_display_rolled">{props.time}</p>
                <p className="date_display">{props.month} {props.day}th</p>
        </StyledRolledClock>
    )
}

export default RolledClock;