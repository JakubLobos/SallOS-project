import { FC } from "react";
import StyledWindowButton from "./WindowButton.style";

interface WindowButtonProps {
    function: () => void;
    IMG: string;
    name: string;
}

const WindowButton: FC<WindowButtonProps> = (props) => {

    const buttonService = () => {
        return () => props.function()
    }

    return (
        <StyledWindowButton onMouseUp={buttonService()}>
            <img alt={ props.name + " button icon"} src={props.IMG} />
        </StyledWindowButton>
    )
};

export default WindowButton;