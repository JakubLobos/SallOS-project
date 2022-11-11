import { FC } from "react";
import AppIcon from "../../../../components/common/appicon/AppIcon.component";
import { useAppsData } from "../../../../utilities/globalzustandstates/applications.data";
import StyledDesktopItems from "./DesktopItems.style";

const DesktopItems:FC = () => {
    
    const { appsData, setAppsData, updateAppData } = useAppsData(); 
    
    return (
        <StyledDesktopItems>
            {
                appsData.map(app => <AppIcon
                    appIMG={app.icon}
                    key={app.id}
                    appName={app.name} />)
            }
        </StyledDesktopItems>
    )
}

export default DesktopItems;
