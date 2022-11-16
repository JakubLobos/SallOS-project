import { FC } from "react";
import StyledAppWindowHeading from "./AppWindowHeading.style";

interface AppWindowHeadingProps {
    getCursorPosition: React.Dispatch<React.SetStateAction<{
        x: number;
        y: number;
    }>>,
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
        </StyledAppWindowHeading>
    )
};

export default AppWindowHeading;
