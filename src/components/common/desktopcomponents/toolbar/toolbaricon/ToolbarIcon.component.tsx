import { FC } from "react";
import { useAppsData } from "../../../../../utilities/globalzustandstates/applications.data";
import StyledToolbarIcon from "./ToolbarIcon.style";

interface ToolbarIconProps {
    name: string,
    icon: any,
    appID: number,
}

const ToolbarIcon: FC<ToolbarIconProps> = (props) => {
    
    const {updateAppData, appsData} = useAppsData()

    return (
        <StyledToolbarIcon onClick={() => {
            updateAppData({
                ...appsData[props.appID],
                isOpen: true,
            }, props.appID);
            console.log(appsData)
        }}>
            <img alt={props.name + " icon"} src={props.icon} />
        </StyledToolbarIcon>
    )
}

export default ToolbarIcon;