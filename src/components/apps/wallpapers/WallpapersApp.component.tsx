import { FC } from "react"
import StyledWallpapers from "./WallpapersApp.style"
import wallpapers from "../../../utilities/wallpapers"
import WallpaperButton from "./wallpaperbutton/WallpaperButton.component"

const Wallpapers:FC = () => {

    return (
        <StyledWallpapers>
            {
                wallpapers.map(wallpaper => {
                    return <WallpaperButton
                        src={wallpaper.src}
                        name={wallpaper.name}/>
                })
            }
        </StyledWallpapers>
    )
}

export default Wallpapers