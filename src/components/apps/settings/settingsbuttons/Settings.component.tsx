import { FC } from "react";
import StyledSettings from "../Settings.style";
import SettingsButtons from "./SettingsButtons.component";

const Settings: FC = () => {
    
    return (
        <StyledSettings>
            <p>Say hello to settings component!</p>
            <SettingsButtons />
        </StyledSettings>
    )
}

export default Settings;