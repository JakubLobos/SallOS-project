import { FC } from "react";
import ControlButtonsWrapper from "./ControlButtons.style";
import WindowButton from "./windowbutton/WindowButton.component";
import closeButtonIcon from "../../../../../../img/static/windowbuttons/exit.png"
import minimizeButtonIcon from "../../../../../../img/static/windowbuttons/minimize.png"
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
            isMinimized: false,
        }, props.appID);
        console.log("aborting app");
    };

    const minimizeApp = () => {
        updateAppData({
            ...appsData[props.appID],
            isMinimized: true,
        }, props.appID);
        console.log("minimizing app");
    }

    return (
        <ControlButtonsWrapper>
            <WindowButton
                function={minimizeApp}
                IMG={minimizeButtonIcon}
                name={"minimize"} />
            <WindowButton
                function={abortApp}
                IMG={closeButtonIcon}
                name={"close"} />
        </ControlButtonsWrapper>
    )
}

export default ControlButtons;