import defaultWallpaper from "../img/static/wallpapers/mountains.jpg"
import forestWallpaper from "../img/static/wallpapers/forest.jpg"

interface wallpapersProps {
    name: string,
    src: string,
    id: number;
}

const wallpapers: Array<wallpapersProps> = [
    { // 0 = default
        name: "Mountains (default)",
        src: defaultWallpaper,
        id: 0,
    },
    {
        name: "Forest",
        src: forestWallpaper,
        id: 1,
    },
    {
        name: "Forest",
        src: forestWallpaper,
        id: 2,
    }
];

export default wallpapers