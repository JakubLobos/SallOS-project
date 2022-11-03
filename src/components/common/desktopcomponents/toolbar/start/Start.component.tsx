import { FC } from "react";
import StyledStart from "./Start.style";
import StartButton from "./startbutton/StartButton.style";
import ButtonDots from "../../../../../img/static/dots.svg"

const Start:FC = () => {

    return (
        <StyledStart>
            <StartButton>
                <img
                    alt="button dots"
                    src={ButtonDots} />
            </StartButton>
        </StyledStart>
    )
}

export default Start;