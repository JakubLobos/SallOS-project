import WindowWrapper from "./AppWindow.style";
import { FC, useState } from "react";
import AppIframeContent from "./appiframecontent/AppIframeContent.component";
import AppWindowHeading from "./appwindowheading/AppWindowHeading.component";
import BuildInAppContent from "./buildinappcontent/BuildInAppContent.component";
import { appsDataProps, useAppsData } from "../../../../utilities/globalzustandstates/applications.data";
import focusApp from "../../../../utilities/FocusApp";

interface AppWindowProps {
    app?: any,
}

const AppWindow: FC<AppWindowProps> = (props) => {
    
    const [cursorPosition, setCursorPosition] = useState({
        x: 30,
        y: 30,
    });

    //a function that checks whether the 
    //app is built-in or is added by user 
    //or is own of a third party website.
    const getAppType = () => {
        if (props.app.type === "webapp") {
            return (
                <AppIframeContent src={props.app.url} />
            )
        }
        else {
            return (
                <BuildInAppContent app={props.app} />
            )
        }
    }

    return (
        <WindowWrapper
            onClick={() => focusApp(props.app)}

            style={{
                left: cursorPosition.x + "px",
                top: cursorPosition.y + "px"
            }}

            focused={props.app.isFocused}
            isMinimized={props.app.isMinimized}>
            
            <AppWindowHeading
                getCursorPosition={setCursorPosition}
                appIcon={props.app.icon}
                appName={props.app.name}
                appID={props.app.id} />
            
            <div className="content_wrapper">
                {getAppType()}
            </div>
        </WindowWrapper>
    )
};

//this component is basic window template. It can receive AppIframeContent
//for external applications, or any other component for build-in apps

export default AppWindow;

