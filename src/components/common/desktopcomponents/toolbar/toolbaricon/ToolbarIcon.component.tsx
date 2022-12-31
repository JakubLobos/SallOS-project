import { FC } from "react";
import { useAppsData } from "../../../../../utilities/globalzustandstates/applications.data";
import StyledToolbarIcon from "./ToolbarIcon.style";

interface ToolbarIconProps {
    name: string,
    icon: any,
    appID: number,
    isOpen: boolean,
    isMinimized: boolean,
}

const ToolbarIcon: FC<ToolbarIconProps> = (props) => {
    
    const {updateAppData, appsData} = useAppsData()

    return (
        <StyledToolbarIcon
            isMinimized={props.isMinimized}
            isOpen={props.isOpen}
            onClick={() => {
            updateAppData({
                ...appsData[props.appID],
                isOpen: true,
                isMinimized: false,
            }, props.appID);
            console.log(appsData)
        }}>
            <img alt={props.name + " icon"} src={props.icon} />
        </StyledToolbarIcon>
    )
}

export default ToolbarIcon;