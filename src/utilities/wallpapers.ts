import defaultWallpaper from "../img/static/wallpapers/mountains.jpg"
import forestWallpaper from "../img/static/wallpapers/forest.jpg"

interface wallpapersProps {
    name: string,
    src: string,
    id: number;
}

const wallpapers: Array<wallpapersProps> = [
    { // 0 = default
        name: "Lake (default)",
        src: "https://wallpapercave.com/wp/wp4846110.jpg",
        id: 0,
    },
    { 
        name: "Mountains (default2)",
        src: defaultWallpaper,
        id: 1,
    },
    {
        name: "Forest",
        src: forestWallpaper,
        id: 2,
    },
    {
        name: "Sadge mountains",
        src: "https://wallpaperaccess.com/full/1787193.jpg",
        id: 3,
    },
    {
        name: "React themed",
        src: "https://th.bing.com/th/id/R.8324b8807d313ffb78cf66ae347973b5?rik=rOtNJ%2f3SHDLgZA&pid=ImgRaw&r=0",
        id: 4,
    },
];

export default wallpapers