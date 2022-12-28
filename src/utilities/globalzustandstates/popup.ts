import zustand from "zustand";

interface PopUpServiceProps {
    heading: string, 
    value: string,
    isHidden: boolean,
    popUpTime: number,
}

const popUpDefaultSettings: PopUpServiceProps = {
    heading: "Default", 
    value: "Default",
    isHidden: true,
    popUpTime: 2000,
};

interface popUpZustandProps {
    popUpSettings: PopUpServiceProps,
    setpopUpSettings: (settings?: PopUpServiceProps) => void,
}
  
export const usePopUpSettings = zustand<popUpZustandProps>((set: Function) => ({
    popUpSettings: popUpDefaultSettings,
    setpopUpSettings: (settings?) => set(() => ({ popUpSettings: settings }))
}));

// if(popUpSettings.isHidden === true) {
//     setpopUpSettings({
//         ...popUpSettings,
//         isHidden: popUpSettings.isHidden ? false : true,
//         heading: "Theme changed!",
//         value: "Changed theme from " + desktopSettings.theme,
//     });
    
//     setTimeout(() => {
//         setpopUpSettings({
//             ...popUpSettings,
//             isHidden: true,
//         });
//     }, popUpSettings.popUpTime)
// }