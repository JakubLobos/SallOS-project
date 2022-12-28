import { FC } from "react";
import { useDesktopSettings } from "../../../../utilities/globalzustandstates/DesktopSettings";
import { usePopUpSettings } from "../../../../utilities/globalzustandstates/popup";
import StyledWallpaperButton from "./WallpaperButton.style";

interface WallpaperButtonProps {
    src: string,
    name: string,
}

const WallpaperButton: FC<WallpaperButtonProps> = (props) => {
    
    const { popUpSettings, setpopUpSettings } = usePopUpSettings();
    const { setDesktopSettings, desktopSettings } = useDesktopSettings();

    const changeWallpaper = () => {
        setDesktopSettings({
            ...desktopSettings,
            wallpaper: props.src,
        })

        if (popUpSettings.isHidden === true) {
            
            setpopUpSettings({
                ...popUpSettings,
                isHidden: popUpSettings.isHidden ? false : true,
                heading: "Wallpaper changed!",
                value: "Changed wallpaper to " + props.name,
            });
            
            setTimeout(() => {
                setpopUpSettings({
                    ...popUpSettings,
                    isHidden: true,
                });
            }, popUpSettings.popUpTime)
        };
    }

    return (
        <StyledWallpaperButton onClick={() => changeWallpaper()}>
            <img src={props.src} alt={props.name + " Wallpaper"} />
            <p>{props.name} { desktopSettings.wallpaper === props.src ? "(choosed)" : ""}</p>
        </StyledWallpaperButton>
    )
};

export default WallpaperButton