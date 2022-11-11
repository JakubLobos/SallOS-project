import { FC, useEffect } from "react";
import { useAppsData } from "../../../../utilities/globalzustandstates/applications.data";
import Start from "./start/Start.component";
import StyledToolbar from "./Toolbar.style";
import ToolbarIcon from "./toolbaricon/ToolbarIcon.component";


const Toolbar: FC = () => {
    const { updateAppData, appsData } = useAppsData();

    return (
        <>
            <Start />
            <StyledToolbar>
                {
                    appsData.filter(app => app.isPinned === true)
                        .map((app) =>
                            <ToolbarIcon key={app.id} name={app.name} icon={app.icon} />
                        )
                };
            </StyledToolbar>
        </>
    );
}

export default Toolbar;