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
        if (navigator.userAgent.indexOf("Windows") !== -1) {
            moveWindow(event)
        }
    }

    return (
        <StyledAppWindowHeading
            draggable="true"
            onDragCapture={(event) => moveWindow(event)}
            
            onDragEnd={(event) => checkAccesibilityEvent(event)}
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
