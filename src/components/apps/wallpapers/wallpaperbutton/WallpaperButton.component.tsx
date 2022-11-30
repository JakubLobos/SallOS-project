import { FC } from "react";
import { useDesktopSettings } from "../../../../utilities/globalzustandstates/DesktopSettings";
import StyledWallpaperButton from "./WallpaperButton.style";

interface WallpaperButtonProps {
    src: string,
    name: string,
}

const WallpaperButton: FC<WallpaperButtonProps> = (props) => {
    
    const { setDesktopSettings, desktopSettings } = useDesktopSettings();

    const changeWallpaper = () => {
        setDesktopSettings({
            ...desktopSettings,
            wallpaper: props.src,
        })
    }

    return (
        <StyledWallpaperButton onClick={() => changeWallpaper()}>
            <img src={props.src} alt={props.name + " Wallpaper"} />
            <p>{props.name}</p>
        </StyledWallpaperButton>
    )
};

export default WallpaperButton