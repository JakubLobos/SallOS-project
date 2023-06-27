import { DragEvent, FC } from "react";
import StyledAppWindowHeading from "./AppWindowHeading.style";
import ControlButtons from "./controlbuttons/ControlButtons.component";

interface AppWindowHeadingProps {
    getCursorPosition: React.Dispatch<React.SetStateAction<{
        x: number;
        y: number;
    }>>,
    appName: string,
    appIcon: string,
    appID: number
}

const AppWindowHeading: FC<AppWindowHeadingProps> = (props) => {

    const moveWindow = (event: DragEvent) => {
        props.getCursorPosition(
            {
                x: event.clientX,
                y: event.clientY,
            });
    };

    // checking accesibility for onDragEnd for macOS.
    const checkAccesibilityEvent = (event: DragEvent) => { 
        if (navigator.userAgent.indexOf("Linux") !== -1 || navigator.userAgent.indexOf("Windows") !== -1) {
            moveWindow(event)
        }
    }

    const isUserChrome = (event: DragEvent) => {
        const isChrome = /Chrome/.test(navigator.userAgent);
        if (isChrome) {
            moveWindow(event)
        }
    }


    return (
        <StyledAppWindowHeading
            draggable="true"
            onDragEnd={(event) => checkAccesibilityEvent(event)}
            onDragCapture={(event) => moveWindow(event)}
            onDragExit={(event) => moveWindow(event)}

            onDragEndCapture={(event) => isUserChrome(event)}
            onDrag={(event) => isUserChrome(event)}
        >
        <div>
                <img alt={props.appName} src={props.appIcon} />
                <p>{ props.appName }</p>
        </div>
            <ControlButtons appID={props.appID}/>
        </StyledAppWindowHeading>
    )
};

export default AppWindowHeading;
