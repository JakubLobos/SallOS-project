import defaultWallpaper from "../img/static/wallpapers/mountains.jpg"
import forestWallpaper from "../img/static/wallpapers/forest.jpg"

interface wallpapersProps {
    mountains: string,
    forest: string,
}

const wallpapers:wallpapersProps = {
    mountains: defaultWallpaper,
    forest: forestWallpaper,
}

export default wallpapers