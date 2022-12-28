import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDesktopSettings } from "../../utilities/globalzustandstates/DesktopSettings";
import { useSession } from "../../utilities/globalzustandstates/SessionState";
import wallpapers from "../../utilities/wallpapers";
import DesktopBlurElement from "../../components/common/desktopcomponents/desktopblurelement/DesktopBlurElement.style";
import Toolbar from "../../components/common/desktopcomponents/toolbar/Toolbar.component";
import { getAuthPage } from "../../components/service/Links.service";
import StyledDesktop from "./Desktop.style";
import ToolbarContainer from "./utils/toolbarcontainer/ToolbarContainer.style";
import AppWindow from "../../components/common/desktopcomponents/appwindow/AppWindow.component";
import DesktopItems from "./utils/desktopitems/DesktopItems.component";
import { useAppsData } from "../../utilities/globalzustandstates/applications.data";
import Clock from "../../components/common/desktopcomponents/clock/Clock.component";
import PopUp from "../../components/common/desktopcomponents/popup/PopUp.component";
import AppPropertiesMenu from "./utils/apppropertiesmenu/AppPropertiesMenu.component";

const Desktop: FC = () => {
    const navigate = useNavigate()
    const { sessionUser } = useSession();
    const { desktopSettings, setDesktopSettings } = useDesktopSettings()
    const { appsData } = useAppsData();

    useEffect(() => {
        if (Object.keys(sessionUser).length === 0) {
            navigate(getAuthPage())
        }
    });

    const clearOpenedSysMenu:Function = () => {
        setDesktopSettings({ //clearing properties menu, when right-click on app
            ...desktopSettings,
            AppPropertiesMenuShown: {
                ...desktopSettings.AppPropertiesMenuShown,
                isHidden: true,
            },})
    }
     
    return (
        <StyledDesktop onMouseUp={() => clearOpenedSysMenu()} wallpaper={desktopSettings.wallpaper}>
            <PopUp />
            <AppPropertiesMenu />
            <>
                {
                    appsData.filter(app => app.isOpen === true).map(app => {
                        return (<AppWindow
                            key={app.id}
                            app={app}
                        />);
                    })     
                }
            </>
            <DesktopItems />
            <ToolbarContainer>
                <Toolbar />
                <Clock />
            </ToolbarContainer>
        </StyledDesktop>
    )
}

export default Desktop;