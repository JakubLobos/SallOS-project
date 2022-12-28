import { FC } from "react";
import { useAppsData } from "../../../../utilities/globalzustandstates/applications.data";
import { useDesktopSettings } from "../../../../utilities/globalzustandstates/DesktopSettings";
import { usePopUpSettings } from "../../../../utilities/globalzustandstates/popup";
import SettingButton from "./settingbutton/SettingButton.style";
import SettingsButtonsWrapper from "./SettingsButtons.style";

const SettingsButtons: FC = () => {

    const {desktopSettings, setDesktopSettings} = useDesktopSettings() 
    const { updateAppData, appsData } = useAppsData();
    const { popUpSettings, setpopUpSettings } = usePopUpSettings()

    const changeTheme = () => {
        setDesktopSettings({
            ...desktopSettings,
            theme: desktopSettings.theme === "lightTheme" ? "darkTheme" : "lightTheme",
        });
        console.log(desktopSettings)

        if(popUpSettings.isHidden === true) {
            setpopUpSettings({
                ...popUpSettings,
                isHidden: false,
                heading: "Theme changed!",
                value: "Changed theme from " + desktopSettings.theme,
            });
            
            setTimeout(() => {
                setpopUpSettings({
                    ...popUpSettings,
                    isHidden: true,
                });
            }, popUpSettings.popUpTime)
        }
    }
    

    const openWallpaperApp = () => {
        updateAppData({
            ...appsData[5],
            isOpen: true,
        }, 5);
        console.log(appsData)
    }

    const openIconCustomizationApp = () => {
        updateAppData({
            ...appsData[10],
            isOpen: true,
        }, 10);
        console.log(appsData)
    }

    return (
        <SettingsButtonsWrapper>
            <SettingButton onClick={() => changeTheme()}>Change theme</SettingButton>
            <SettingButton onClick={() => openWallpaperApp()}>Wallpapers</SettingButton>
            <SettingButton onClick={() => openIconCustomizationApp()}>Change user icon color</SettingButton>
            
        </SettingsButtonsWrapper>
    )
};

export default SettingsButtons;