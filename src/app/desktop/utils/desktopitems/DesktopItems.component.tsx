import { FC } from "react";
import AppIcon from "../../../../components/common/appicon/AppIcon.component";
import { useAppsData } from "../../../../utilities/globalzustandstates/applications.data";
import StyledDesktopItems from "./DesktopItems.style";

const DesktopItems:FC = () => {
    
    const { appsData } = useAppsData(); 

    return (
        <StyledDesktopItems>
            {
                appsData.filter(app => app.isHidden === false).map(app => <AppIcon
                    key={app.id}
                    app={app}
                />)
            }
        </StyledDesktopItems>
    )
}

export default DesktopItems;
