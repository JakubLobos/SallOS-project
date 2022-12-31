import { usePopUpSettings } from "../../../../utilities/globalzustandstates/popup";
import wallpapers from "../../../../utilities/wallpapers"

const responseConsoleCommand = (
    handleValue: any,
    setCommandHistory: Function,
    commandHistory: Array<{ value: String }>,
    appsData: Array<any>,
    setHandleConsoleColor: Function) => {
    
    //========================================
    //=========== console functions ===========
    //========================================
    const newConsoleResponse = (content: string) => {
        setCommandHistory([...commandHistory, { value: content, prefix: '$console/root ' }])
    }

    //========================================
    //=========== console commands ===========
    //========================================

    if (handleValue.slice(0, 5).includes("color")) {
        const color:string = handleValue.split(" ");
        setHandleConsoleColor(color[1])
        newConsoleResponse("changed to " + color[1] + "! If color not appeared please check usage: color (color i.e. red)")
    }

    else if (handleValue.slice(0, 7).includes("get doc")) {
        newConsoleResponse("Console usage (docs): \n\n1) change console color: color (color)\nExample: color red \n\n2) Ask console to log your text: \nsay (your text)\nExample: say hello world! \n\n3) install new wallpaper: \ninstall wallpaper (source - url) (name)\nExample: install wallpaper https://upload.wikimedia.org/wikipedia/commons/e/e9/Example_rotated_90_left.jpg secretwallpaper \n\n4) clear console\nclear\nExample: clear \n\n5) Install new app\ninstall app (source - only website url) (name)\nExample: install app https://www.calculator.com/ calculator")
    }

    else if (handleValue.slice(0, 3).includes("say")) {
        newConsoleResponse(handleValue.slice(3))
    }

    else if (handleValue.slice(0, 17).includes("install wallpaper")) {
        const command:string = handleValue.split(" ")
        newConsoleResponse("installing wallpaper from source " + command[2] + " as " + command[3])
        wallpapers.push({
            name: command[3],
            src: command[2],
            id: wallpapers.length,
        },)
    }

    else if (handleValue.slice(0, 5).includes("clear")) {
        setCommandHistory([]);
        console.log(commandHistory);
    }

    else if (handleValue.slice(0, 11).includes("install app")) {
        const command: string = handleValue.split(" ")
        newConsoleResponse("installing app " + command[3] + " from " + command[2] + " <!> Please note that not all sites will be compatible with SallOS. App appear on desktop after closing console.")
        appsData.push({
            name: command[3] + ".exe",
            type: "webapp",
            icon: "https://th.bing.com/th/id/R.84adc0f61d3688728008190e4b81a265?rik=ZeVnnRygF8BpLQ&pid=ImgRaw&r=0",
            isPinned: false,
            id: appsData.length,
            isOpen: false,
            isFocused: false,
            isHidden: false,
            isMinimized: false,
            url: command[2],
        })
        console.log(appsData)
    }
}

export default responseConsoleCommand;