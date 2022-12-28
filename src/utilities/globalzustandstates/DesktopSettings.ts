import zustand from "zustand";
import wallpapers from "../wallpapers"
import { appsDataProps } from "./applications.data";

interface desktopDefaultSettingsProps {
    wallpaper: string,
    userIconColor: string,
    theme: string,
    usericon: string;
    AppPropertiesMenuShown: {
        appSelected: appsDataProps,
        isHidden: boolean,
        xpos: number,
        ypos: number,
    },
}

const desktopDefaultSettings: desktopDefaultSettingsProps = {
    wallpaper: wallpapers[0].src, // 0 = default
    userIconColor: "",
    theme: "lightTheme",
    usericon: "#",
    AppPropertiesMenuShown: {
        appSelected:   {
            name: "chrome",
            type: "webapp",
            url: "https://www.google.pl/?igu=1",
            icon: "https://pnggrid.com/wp-content/uploads/2021/04/Google-Chrome-Logo-2048x2048.png",
            isPinned: true,
            isOpen: false,
            isHidden: false,
            isFocused: false,
            id: 0,
          },
        isHidden: true,
        xpos: 10,
        ypos: 10,
    },
};

interface DesktopSettings {
    desktopSettings: desktopDefaultSettingsProps,
    setDesktopSettings: (settings?: desktopDefaultSettingsProps) => void,
  }
  
export const useDesktopSettings = zustand<DesktopSettings>((set: Function) => ({
    desktopSettings: desktopDefaultSettings,
    setDesktopSettings: (settings?) => set(() => ({ desktopSettings: settings }))
}));