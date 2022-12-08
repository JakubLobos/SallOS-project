import { FC } from "react";
import ControlButtonsWrapper from "./ControlButtons.style";
import WindowButton from "./windowbutton/WindowButton.component";
import closeButtonIcon from "../../../../../../img/static/windowbuttons/exit.png"
import { useAppsData } from "../../../../../../utilities/globalzustandstates/applications.data";

interface ControlButtonsProps {
    appID: number,
}

const ControlButtons:FC<ControlButtonsProps> = (props) => {
    
    const { appsData, updateAppData } = useAppsData();

    const abortApp = () => {
        updateAppData({
            ...appsData[props.appID],
            isOpen: false,
        }, props.appID);
        console.log("aborting app");
    };

    return (
        <ControlButtonsWrapper>
            <WindowButton
                function={abortApp}
                IMG={closeButtonIcon}
                name={"close"} />
        </ControlButtonsWrapper>
    )
}

export default ControlButtons;