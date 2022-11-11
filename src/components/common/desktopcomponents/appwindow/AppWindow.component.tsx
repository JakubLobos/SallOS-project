import WindowWrapper from "./AppWindow.style";
import chromeicon from "../../../../img/static/icons/chrome.png"
import React, { FC, PropsWithChildren } from "react";

const AppWindow: FC<PropsWithChildren> = (props) => {

    return (
        <WindowWrapper>
            {props.children}
        </WindowWrapper>
    )
};

//this component is basic window template. It can receive AppIframeContent
//for external applications, or any other component for build-in apps

export default AppWindow;

