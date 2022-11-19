import { FC } from "react";
import Notepad from "../../../../apps/notepad/notepad.component";
import StyledBuildInAppContent from "./BuildInAppContent.style";

interface BuildInAppContentProps {
    appName: string,
    appID?: number,
}

const BuildInAppContent: FC<BuildInAppContentProps> = (props) => {

    const getAppContent = () => {
        switch(props.appName){
            case "Notepad":
                return <Notepad />
        }
        switch(props.appName){
            case "folder":
                return <Notepad />
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