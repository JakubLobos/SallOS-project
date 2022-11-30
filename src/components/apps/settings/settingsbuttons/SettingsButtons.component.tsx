import { FC } from "react";
import { useAppsData } from "../../../../utilities/globalzustandstates/applications.data";
import { useDesktopSettings } from "../../../../utilities/globalzustandstates/DesktopSettings";
import SettingButton from "./settingbutton/SettingButton.style";
import SettingsButtonsWrapper from "./SettingsButtons.style";

const SettingsButtons: FC = () => {

    const {desktopSettings, setDesktopSettings} = useDesktopSettings() 
    const { updateAppData, appsData } = useAppsData();

    const changeTheme = () => {
        setDesktopSettings({
            ...desktopSettings,
            theme: desktopSettings.theme === "lightTheme" ? "darkTheme" : "lightTheme",
        });
        console.log(desktopSettings)
    }

    const openWallpaperApp = () => {
        updateAppData({
            ...appsData[5],
            isOpen: true,
        }, 5);
        console.log(appsData)
    }

    return (
        <SettingsButtonsWrapper>
            <SettingButton onClick={() => changeTheme()}>Change theme</SettingButton>
            <SettingButton onClick={() => openWallpaperApp()}>Wallpapers</SettingButton>
            
            <SettingButton>Change size</SettingButton>
            
        </SettingsButtonsWrapper>
    )
};

export default SettingsButtons;