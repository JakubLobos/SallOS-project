import { FC } from "react"
import { lastLauchedApps } from "../../../../../../../utilities/lastest";
import AppIcon from "../../../../../appicon/AppIcon.component";
import CategoryHeading from "../../../../../categoryheading/CategoryHeading.component";
import StyledMenuCategory from "../StyledMenuCategory.style";

const LastestLaunch:FC = () => {

    return (
        <StyledMenuCategory>
            <CategoryHeading content="Last launched"/>
            <ol className="apps_wrapper">
            {
                lastLauchedApps.slice(0, 4).map(lastApp => <li><AppIcon
                    app={lastApp}
                    key={lastApp.id}
                /></li>
                )
            }
            </ol>
        </StyledMenuCategory>
    )
}

export default LastestLaunch;