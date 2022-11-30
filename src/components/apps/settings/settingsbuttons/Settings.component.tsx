import { FC } from "react";
import StyledSettings from "../Settings.style";
import SettingsButtons from "./SettingsButtons.component";

const Settings: FC = () => {
    
    return (
        <StyledSettings>
            <SettingsButtons />
        </StyledSettings>
    )
}

export default Settings;