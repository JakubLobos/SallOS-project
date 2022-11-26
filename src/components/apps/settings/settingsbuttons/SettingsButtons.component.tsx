import { FC } from "react";
import { useDesktopSettings } from "../../../../utilities/globalzustandstates/DesktopSettings";
import SettingButton from "./settingbutton/SettingButton.style";
import SettingsButtonsWrapper from "./SettingsButtons.style";

const SettingsButtons: FC = () => {

    const {desktopSettings, setDesktopSettings} = useDesktopSettings() 

    const changeTheme = () => {
        setDesktopSettings({
            ...desktopSettings,
            theme: desktopSettings.theme === "lightTheme" ? "darkTheme" : "lightTheme",
        });
        console.log(desktopSettings)
    }

    return (
        <SettingsButtonsWrapper>
            <SettingButton onClick={() => changeTheme()}>Change theme</SettingButton>
            <SettingButton>Change size</SettingButton>
            <SettingButton>Change size</SettingButton>
        </SettingsButtonsWrapper>
    )
};

export default SettingsButtons;