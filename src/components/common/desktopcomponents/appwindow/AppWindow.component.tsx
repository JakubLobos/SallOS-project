import WindowWrapper from "./AppWindow.style";
import chromeicon from "../../../../img/static/icons/chrome.png"
import React, { FC, PropsWithChildren, useState } from "react";
import AppIframeContent from "./appiframecontent/AppIframeContent.component";
import AppWindowHeading from "./appwindowheading/AppWindowHeading.component";
import BuildInAppContent from "./buildinappcontent/BuildInAppContent.component";
import { useAppsData } from "../../../../utilities/globalzustandstates/applications.data";

interface AppWindowProps {
    app?: any,
}

const AppWindow: FC<AppWindowProps> = (props) => {
    
    const [cursorPosition, setCursorPosition] = useState({
        x: 30,
        y: 30,
    });

    const {appsData, updateAppData} = useAppsData()

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
            onClick={() => {
                appsData.filter(app => app.isFocused === true).map(app => {
                    updateAppData({
                        ...appsData[app.id],
                        isFocused: false,
                    }, app.id);
                })

                updateAppData({
                    ...appsData[props.app.id],
                    isFocused: true,
                }, props.app.id);
                console.log(appsData)
            }}
            focused={props.app.isFocused}
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

