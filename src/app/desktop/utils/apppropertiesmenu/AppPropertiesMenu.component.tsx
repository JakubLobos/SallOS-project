import { FC } from "react";
import { useAppsData } from "../../../../utilities/globalzustandstates/applications.data";
import { useDesktopSettings } from "../../../../utilities/globalzustandstates/DesktopSettings";
import StyledAppPropertiesMenu from "./AppPropertiesMenu.style";

const AppPropertiesMenu: FC = () => {

    const {desktopSettings, setDesktopSettings} = useDesktopSettings()
    const {updateAppData, appsData} = useAppsData()

    const clearOpenedSysMenu:Function = () => {
        setDesktopSettings({ //clearing properties menu, when cursor is not over menu
            ...desktopSettings,
            AppPropertiesMenuShown: {
                ...desktopSettings.AppPropertiesMenuShown,
                isHidden: true,
            },})
    }

    const pinApp:Function = () => {
        updateAppData({
            ...appsData[desktopSettings.AppPropertiesMenuShown.appSelected.id],
            isPinned: desktopSettings.AppPropertiesMenuShown.appSelected.isPinned ? false : true,
        }, desktopSettings.AppPropertiesMenuShown.appSelected.id);
        console.log(appsData)
    }

    const removeApp:Function = () => {
        updateAppData({
            ...appsData[desktopSettings.AppPropertiesMenuShown.appSelected.id],
            isHidden: true,
        }, desktopSettings.AppPropertiesMenuShown.appSelected.id);
    }

    return (
        <StyledAppPropertiesMenu
            onMouseLeave={() => clearOpenedSysMenu()}
            posx={desktopSettings.AppPropertiesMenuShown.xpos}
            posy={desktopSettings.AppPropertiesMenuShown.ypos}
            isHidden={desktopSettings.AppPropertiesMenuShown.isHidden}>
            <button onClick={() => pinApp()}>&#9875; {desktopSettings.AppPropertiesMenuShown.appSelected.isPinned ? "unpin app" : "pin app"}</button>
            <button onClick={() => removeApp()}>&#9986; hide from desktop</button>
        </StyledAppPropertiesMenu>
    )
}

export default AppPropertiesMenu;