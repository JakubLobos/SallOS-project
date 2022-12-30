
import { FC } from "react";
import Notepad from "../../../../apps/notepad/notepad.component";
import Settings from "../../../../apps/settings/settingsbuttons/Settings.component";
import Wallpapers from "../../../../apps/wallpapers/WallpapersApp.component";
import StyledBuildInAppContent from "./BuildInAppContent.style";
import Console from "../../../../apps/console/Console.component";
import MyProfile from "../../../../apps/myprofile/MyProfile.component";
import IconCustomization from "../../../../apps/iconcustomization/IconCustomization.component";
import Folder from "../../../../apps/folder/Folder.component";

interface BuildInAppContentProps {
    app?: any,
}

const BuildInAppContent: FC<BuildInAppContentProps> = (props) => {

    const getAppContent = () => {
        switch(props.app.type){
            case "notepad":
                return <Notepad app={props.app}/>

            case "app":
                return <Notepad app={props.app} />
            
            case "settings":
                return <Settings />
            
            case "wallpapers":
                return <Wallpapers />
            
            case "console":
                return <Console />
            
            case "myprofile":
                return <MyProfile />
            
            case "iconcustomization":
                return <IconCustomization />
            
            case "folder":
                return <Folder />
        }
    }

    return (
        <StyledBuildInAppContent>
            {
                getAppContent()
            }
        </StyledBuildInAppContent>
    )
};

export default BuildInAppContent;