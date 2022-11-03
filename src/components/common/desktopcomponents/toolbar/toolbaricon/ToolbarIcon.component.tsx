import { FC } from "react";
import StyledToolbarIcon from "./ToolbarIcon.style";

interface ToolbarIconProps {
    name: string,
    icon: any,
}

const ToolbarIcon: FC<ToolbarIconProps> = (props) => {
    
    return (
        <StyledToolbarIcon>
            <img alt={props.name + " icon"} src={props.icon} />
        </StyledToolbarIcon>
    )
}

export default ToolbarIcon;