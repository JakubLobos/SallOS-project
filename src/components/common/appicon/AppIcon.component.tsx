import { FC } from "react";
import { appsDataProps, useAppsData } from "../../../utilities/globalzustandstates/applications.data";
import { useDesktopSettings } from "../../../utilities/globalzustandstates/DesktopSettings";
import { verifyLastestApp } from "../../../utilities/lastest";
import StyledAppIcon from "./AppIcon.style";

interface AppIconProps {
    app: appsDataProps,
}

const AppIcon: FC<AppIconProps> = (props) => {

    const { appsData, updateAppData } = useAppsData(); 
    const { setDesktopSettings, desktopSettings } = useDesktopSettings();

    return (
        <StyledAppIcon onContextMenu={e => {
            e.preventDefault();
            setDesktopSettings({
                ...desktopSettings,
                AppPropertiesMenuShown: {
                    ...desktopSettings.AppPropertiesMenuShown,
                    appSelected: props.app,
                    isHidden: desktopSettings.AppPropertiesMenuShown.isHidden ? false : true,
                    xpos: e.clientX - 5,
                    ypos: e.clientY - 5,
                },})
        }} onClick={() => {
            updateAppData({
                ...appsData[props.app.id],
                isOpen: true,
                isMinimized: false,
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