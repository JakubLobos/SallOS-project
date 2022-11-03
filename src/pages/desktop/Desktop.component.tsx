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

const Desktop: FC = () => {
    const navigate = useNavigate()
    const { sessionUser } = useSession();
    const { desktopSettings, setDesktopSettings } = useDesktopSettings()

    useEffect(() => {
        if (Object.keys(sessionUser).length === 0) {
            navigate(getAuthPage())
        }
    });

    useEffect(() => {
        setDesktopSettings({
            wallpaper: wallpapers.mountains,
            toolbar_size: 1,
        })
        console.log(desktopSettings.wallpaper)
    }, [])
    
    
    return (
        <StyledDesktop wallpaper={desktopSettings.wallpaper}>
            <h1>Desktop, hello {sessionUser.username}</h1>
            <DesktopBlurElement></DesktopBlurElement>
            <ToolbarContainer>
                <Toolbar />
            </ToolbarContainer>
            <AppWindow />
        </StyledDesktop>
    )
}

export default Desktop;