import zustand from "zustand";
import wallpapers from "../wallpapers"

interface desktopDefaultSettingsProps {
    wallpaper: string,
    toolbar_size: number,
    theme: string,
}

const desktopDefaultSettings: desktopDefaultSettingsProps = {
    wallpaper: wallpapers[0].src, // 0 = default
    toolbar_size: 1,
    theme: "lightTheme",
};

interface DesktopSettings {
    desktopSettings: desktopDefaultSettingsProps,
    setDesktopSettings: (settings?: desktopDefaultSettingsProps) => void,
  }
  
export const useDesktopSettings = zustand<DesktopSettings>((set: Function) => ({
    desktopSettings: desktopDefaultSettings,
    setDesktopSettings: (settings?) => set(() => ({ desktopSettings: settings }))
}));