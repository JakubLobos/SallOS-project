import { FC } from "react";
import StyledAppWindowHeading from "./AppWindowHeading.style";

interface AppWindowHeadingProps {
    getCursorPosition: React.Dispatch<React.SetStateAction<{
        x: number;
        y: number;
    }>>,
    appName: "string",
    appIcon: "string",
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
        </StyledAppWindowHeading>
    )
};

export default AppWindowHeading;
