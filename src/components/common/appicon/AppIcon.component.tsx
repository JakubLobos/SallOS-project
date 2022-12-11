import { FC, useEffect } from "react";
import { appsDataProps, useAppsData } from "../../../utilities/globalzustandstates/applications.data";
import { verifyLastestApp } from "../../../utilities/lastest";
import AppWindow from "../desktopcomponents/appwindow/AppWindow.component";
import StyledAppIcon from "./AppIcon.style";

interface AppIconProps {
    app: appsDataProps,
}

const AppIcon: FC<AppIconProps> = (props) => {

    const { appsData, updateAppData } = useAppsData(); 

    return (
        <StyledAppIcon onClick={() => {
            updateAppData({
                ...appsData[props.app.id],
                isOpen: true,
            }, props.app.id);
            console.log(appsData)
            verifyLastestApp(props.app);
        }}>
            <img src={props.app.icon} alt={"desktop icon of " + props.app.name}/>
            <p>{props.app.name}</p>
        </StyledAppIcon>
    )
}

export default AppIcon;