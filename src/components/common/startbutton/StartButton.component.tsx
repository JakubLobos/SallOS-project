import { getLoadingPageLink } from "../../service/Links.service"
import StyledStartButton from "./StartButton.style"
import buttonImg from "../../../img/static/StartButton.png"

const StartButton = () => {
    return (

            <StyledStartButton href={getLoadingPageLink()}>
                <img
                    alt="start button img"
                    src={buttonImg}
                    width="100%"
                    height="auto" />
            </StyledStartButton>

    )
}

export default StartButton;