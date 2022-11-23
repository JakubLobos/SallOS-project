import { FC } from "react";
import Notepad from "../../../../apps/notepad/notepad.component";
import Settings from "../../../../apps/settings/Settings.component";
import StyledBuildInAppContent from "./BuildInAppContent.style";

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