import chromeIcon from "../../img/static/icons/chrome.png"

interface appsDataProps {
    name: string,
    url: string,
    icon: string,
    isPinned: boolean,
    id: number,
}

const appsData:Array<appsDataProps> = [
    {
        name: "chrome",
        url: "",
        icon: "https://pnggrid.com/wp-content/uploads/2021/04/Google-Chrome-Logo-2048x2048.png",
        isPinned: true,
        id: 0,
    },
    {
        name: "chrome",
        url: "",
        icon: "https://pnggrid.com/wp-content/uploads/2021/04/Google-Chrome-Logo-2048x2048.png",
        isPinned: false,
        id: 1,
    }
]

export default appsData;