import { FC } from "react";
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

    const moveWindow = (event: any) => {
        props.getCursorPosition(
            {
                x: event.clientX,
                y: event.clientY,
            });
    };

    return (
        <StyledAppWindowHeading
            draggable="true"
            onDragCapture={(event) => moveWindow(event)}
            onDragEnd={(event) => moveWindow(event)}
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
