import { appsDataProps } from "./globalzustandstates/applications.data"


export const verifyLastestApp = (app: appsDataProps) => {
    if (lastLauchedApps.length <= 0) {
        lastLauchedApps.push(app);
        console.log("pushuje bo 0")
    }
    else if (lastLauchedApps.find((last: appsDataProps) => {
        if (last.name === app.name && last.type === app.type) return true   
    })){
        console.log("jest juz!!!!")
    }
    else {
        lastLauchedApps.push(app);
        console.log("pushuje, nie ma!")
    };
    
}

export const lastLauchedApps: Array<appsDataProps> = []
