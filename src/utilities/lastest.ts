import { appsDataProps } from "./globalzustandstates/applications.data"

export const verifyLastestApp = (app: appsDataProps) => {
    
    //validation the array is not empty
    if (lastLauchedApps.length <= 0) {
        lastLauchedApps.unshift(app);
        console.log("Pushed an first opened app")
    }
    
    //verify that app is not reopened, if it = push into array to the lastest!
    else if (lastLauchedApps.find((last: appsDataProps) => {
        if (last.name === app.name && last.type === app.type) {
            
            const index:number = lastLauchedApps.findIndex(item => item.id === last.id); 
            lastLauchedApps.splice(index, 1);
            lastLauchedApps.unshift(last);

            return true;
        };
    })) console.log("This app has been open before, push into array to the lastest")
    
    //if array is not empty, and app is first time opened = push into array
    else {
        lastLauchedApps.unshift(app);
        console.log("Pushed, this app has been opened first time in user session")
    };
    console.log(lastLauchedApps)
}

export const lastLauchedApps: Array<appsDataProps> = []
