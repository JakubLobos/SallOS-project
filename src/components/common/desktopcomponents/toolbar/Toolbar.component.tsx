import { FC, useEffect } from "react";
import { useAppsData } from "../../../../utilities/globalzustandstates/applications.data";
import Start from "./start/Start.component";
import StyledToolbar from "./Toolbar.style";
import ToolbarIcon from "./toolbaricon/ToolbarIcon.component";


const Toolbar: FC = () => {
    const { appsData } = useAppsData();

    return (
        <>
            <Start />
            <StyledToolbar>
                {
                    appsData.filter(app => app.isPinned === true || app.isMinimized === true || app.isOpen)
                        .map((app) =>
                            <ToolbarIcon
                                key={app.id}
                                name={app.name}
                                icon={app.icon}
                                appID={app.id}
                                isOpen={app.isOpen}
                                isMinimized={app.isMinimized} />
                        )
                }
            </StyledToolbar>
        </>
    );
}

export default Toolbar;