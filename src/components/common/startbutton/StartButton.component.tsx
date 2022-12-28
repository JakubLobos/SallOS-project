import { getLoadingPageLink } from "../../service/Links.service"
import StyledStartButton from "./StartButton.style"
import buttonImg from "../../../img/static/StartButton.png"
import clickSound from "../../../sounds/common/click-124467.mp3"


const StartButton = () => {
    const startButtonAudio = new Audio(clickSound);
    return (
       
            <StyledStartButton onMouseOver={() => startButtonAudio.play()} href={getLoadingPageLink()}>
                <img
                    alt="start button img"
                    src={buttonImg}
                    width="100%"
                    height="auto" />
            </StyledStartButton>

    )
}

export default StartButton;