import { FC, useEffect, useState } from "react";
import StyledClock from "./Clock.style";
import RolledClock from "./rolledclock/RolledClock.component";

const Clock:FC = () => {

    const [time, setTime] = useState("00:00:00");
    const [day, setDay] = useState("1")
    const [month, setMonth] = useState("0")
    const [isRolledVisible, setIsRolledVisible] = useState(false)
 
    const updateTime = () => {
        const now = new Date();
        const actualTime = now.toLocaleTimeString()
        const actualDay = now.getDate().toLocaleString()
        const actualMonth = now.getMonth()


        const getConvertMonth = () => {
            switch (actualMonth) {
                case 0: return "January"
                case 1: return "Februrary"
                case 2: return "March"
                case 3: return "April"
                case 4: return "May"
                case 5: return "June"
                case 6: return "July"
                case 7: return "August"
                case 8: return "September"
                case 9: return "October"
                case 10: return "November"
                case 11: return "December"
            }
            return "";
        };
        setTime(actualTime);
        setDay(actualDay)
        setMonth(getConvertMonth())
    };



    useEffect(() => {
        setInterval(updateTime, 1000);
    }, []);



    return (
        <StyledClock>
            <RolledClock month={month} day={day} time={time} isVisible={isRolledVisible} />
            <p className="time_display">{time.slice(0, 5)}</p>
            <button onClick={() => isRolledVisible ? setIsRolledVisible(false) : setIsRolledVisible(true)} className="show_more">&#10148;</button>
        </StyledClock>
    )
}

export default Clock;