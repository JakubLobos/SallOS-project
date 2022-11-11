import { FC } from "react";
import StartButton from "../../components/common/startbutton/StartButton.component";
import StyledStartPage from "./StartScreen.style"

const StartScreen:FC = () => {

    return (
        <StyledStartPage>
            <StartButton />
        </StyledStartPage>
    )
}

export default StartScreen;