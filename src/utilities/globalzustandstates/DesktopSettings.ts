import zustand from "zustand";
import wallpapers from "../wallpapers"

interface DesktopDefaultSettingsProps {
    wallpaper: string,
    toolbar_size: number,
}

const DesktopDefaultSettings:DesktopDefaultSettingsProps = {
    wallpaper: wallpapers.mountains,
    toolbar_size: 1,
}

interface DesktopSettings {
    desktopSettings: any,
    setDesktopSettings: (settings?: any) => void,
  }
  
export const useDesktopSettings = zustand<DesktopSettings>((set: any) => ({
    desktopSettings: DesktopDefaultSettings,
    setDesktopSettings: (settings?: any) => set(() => ({ desktopSettings: settings }))
}));