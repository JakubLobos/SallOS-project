import { FC, useEffect } from "react";
import { useAppsData } from "../../../utilities/globalzustandstates/applications.data";
import AppWindow from "../desktopcomponents/appwindow/AppWindow.component";
import StyledAppIcon from "./AppIcon.style";

interface AppIconProps {
    appName: string;
    appIMG: string;
    appID: number;
}

const AppIcon:FC<AppIconProps> = (props) => {

    const { appsData, updateAppData } = useAppsData(); 

    return (
        <StyledAppIcon onClick={() => {
            updateAppData({
                ...appsData[props.appID],
                isOpen: true,
            }, props.appID);
            console.log(appsData)
        }}>
            <img src={props.appIMG} alt={"desktop icon of " + props.appName}/>
            <p>{props.appName}</p>
        </StyledAppIcon>
    )
}

export default AppIcon;