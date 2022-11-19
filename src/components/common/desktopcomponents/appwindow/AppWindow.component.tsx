import WindowWrapper from "./AppWindow.style";
import chromeicon from "../../../../img/static/icons/chrome.png"
import React, { FC, PropsWithChildren, useState } from "react";
import AppIframeContent from "./appiframecontent/AppIframeContent.component";
import AppWindowHeading from "./appwindowheading/AppWindowHeading.component";
import BuildInAppContent from "./buildinappcontent/BuildInAppContent.component";

interface AppWindowProps {
    app?: any,
}

const AppWindow: FC<AppWindowProps> = (props) => {
    
    const [cursorPosition, setCursorPosition] = useState({
        x: 30,
        y: 30,
    });

    const getAppType = () => {
        if (props.app.type === "webapp") {
            return (
                <AppIframeContent src={props.app.url} />
            )
        }
        else {
            return (
                <BuildInAppContent appName={props.app.name} />
            )
        }
    }

    return (
        <WindowWrapper
            style={{
                left: cursorPosition.x + "px",
                top: cursorPosition.y + "px"
            }}>
            <AppWindowHeading
                getCursorPosition={setCursorPosition}
                appIcon={props.app.icon}
                appName={props.app.name}
                appID={props.app.id}
            />
            <div className="content_wrapper">
            {
                getAppType()
            }
            </div>
        </WindowWrapper>
    )
};

//this component is basic window template. It can receive AppIframeContent
//for external applications, or any other component for build-in apps

export default AppWindow;

