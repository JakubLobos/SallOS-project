import { FC } from "react"
import { lastLauchedApps } from "../../../../../../../utilities/lastest";
import AppIcon from "../../../../../appicon/AppIcon.component";
import StyledLastest from "./Lastest.style";

const LastestLaunch:FC = () => {

    return (
        <StyledLastest>
            <h1>Last launched</h1>
            {
                lastLauchedApps.map(lastApp => <AppIcon
                    app={lastApp}
                    key={lastApp.id}
                />
                )
            }
        </StyledLastest>
    )
}

export default LastestLaunch;