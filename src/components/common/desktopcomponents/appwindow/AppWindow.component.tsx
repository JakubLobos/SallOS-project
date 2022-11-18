import WindowWrapper from "./AppWindow.style";
import chromeicon from "../../../../img/static/icons/chrome.png"
import React, { FC, PropsWithChildren, useState } from "react";
import AppIframeContent from "./appiframecontent/AppIframeContent.component";
import AppWindowHeading from "./appwindowheading/AppWindowHeading.component";

interface AppWindowProps {
    app?: any,
}

const AppWindow: FC<AppWindowProps> = (props) => {
    
    const [cursorPosition, setCursorPosition] = useState({
        x: 30,
        y: 30,
    });

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
            <div className="IframeWrapper">
                <AppIframeContent src={props.app.url} />
            </div>
        </WindowWrapper>
    )
};

//this component is basic window template. It can receive AppIframeContent
//for external applications, or any other component for build-in apps

export default AppWindow;

