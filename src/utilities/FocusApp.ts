import { appsDataProps, useAppsData } from "./globalzustandstates/applications.data";

const focusApp = (appToFocus: any) => {
    const { appsData, updateAppData } = useAppsData()
    
    appsData.filter(app => app.isFocused === true).map(app => {
        updateAppData({
            ...appsData[app.id],
            isFocused: false,
        }, app.id);
    });
    updateAppData({
        ...appsData[appToFocus.id],
        isFocused: true,
    }, appToFocus.id);
}

export default focusApp;