import { FC } from "react"
import { useAppsData } from "../../../../../../../utilities/globalzustandstates/applications.data";
import AppIcon from "../../../../../appicon/AppIcon.component";
import CategoryHeading from "../../../../../categoryheading/CategoryHeading.component";
import StyledMenuCategory from "../StyledMenuCategory.style";

const Tools:FC = () => {

    const { appsData } = useAppsData();

    return (
        <StyledMenuCategory>
            <CategoryHeading content="Tools" />
            <div className="apps_wrapper">
                {
                    appsData.filter(app => app.usage === "tool").map(app => <AppIcon app={app}/>)
                }
            </div>
        </StyledMenuCategory>
    )
}

export default Tools;