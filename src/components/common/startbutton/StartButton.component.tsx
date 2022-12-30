import { getLoadingPageLink } from "../../service/Links.service"
import StyledStartButton from "./StartButton.style"
import buttonImg from "../../../img/static/StartButton.png"
import clickSound from "../../../sounds/common/click-124467.mp3"
import { useNavigate } from "react-router-dom"


const StartButton = () => {
    const startButtonAudio = new Audio(clickSound);
    const navigate = useNavigate()
    return (
       
            <StyledStartButton onClick={() => navigate(getLoadingPageLink())} onMouseOver={() => startButtonAudio.play()}>
                <img
                    alt="start button img"
                    src={buttonImg}
                    width="100%"
                    height="auto" />
            </StyledStartButton>

    )
}

export default StartButton;