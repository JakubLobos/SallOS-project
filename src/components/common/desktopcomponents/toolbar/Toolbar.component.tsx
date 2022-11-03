import { FC } from "react";
import Start from "./start/Start.component";
import StyledToolbar from "./Toolbar.style";
import appsData from "../../../../utilities/dataofapplications/applications.data";
import ToolbarIcon from "./toolbaricon/ToolbarIcon.component";

const Toolbar: FC = () => {

    console.log(appsData);

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