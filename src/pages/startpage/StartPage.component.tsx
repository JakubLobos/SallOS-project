import { FC } from "react";
import StartButton from "../../components/common/startbutton/StartButton.component";
import StyledStartPage from "./StartPage.style"

const StartPage:FC = () => {

    return (
        <StyledStartPage>
            <StartButton />
        </StyledStartPage>
    )
}

export default StartPage;