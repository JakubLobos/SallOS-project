import { FC } from "react";
import StyledAppIcon from "./AppIcon.style";

interface AppIconProps {
    appName: string;
    appIMG: string;
}

const AppIcon:FC<AppIconProps> = (props) => {

    const appClicked = () => {
        console.log(props.appName)
    }

    return (
        <StyledAppIcon onClick={appClicked}>
            <img src={props.appIMG} alt={"desktop icon of " + props.appName}/>
            <p>{props.appName}</p>
        </StyledAppIcon>
    )
}

export default AppIcon;