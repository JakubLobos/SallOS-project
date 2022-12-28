import { FC } from "react";
import { usePopUpSettings } from "../../../../utilities/globalzustandstates/popup";
import StyledPopUp from "./PopUp.style";
import popUpSound from "../../../../sounds/common/mixkit-select-click-1109.mp3"

const PopUp: FC = () => {
    const popUpAudio = new Audio(popUpSound);

    const { popUpSettings } = usePopUpSettings();
    return (
        <StyledPopUp onAnimationStart={() => popUpAudio.play()} isHidden={popUpSettings.isHidden}>
            <h3>{popUpSettings.heading}</h3>
            <p>{popUpSettings.value}</p>
        </StyledPopUp>
    )
}

export default PopUp;
