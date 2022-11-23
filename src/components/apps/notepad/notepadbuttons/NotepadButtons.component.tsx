import { FC, useState } from "react";
import { useAppsData } from "../../../../utilities/globalzustandstates/applications.data";
import NotepadButtonsWrapper from "./NotepadButtons.style";

interface NotepadButtonsProps {
    progress: string,
    setFontSize: Function,
    fontSize: number,
}

const NotepadButtons: FC<NotepadButtonsProps> = (props) => {

    const {appsData} = useAppsData()
    const [newFileName, setNewFileName]:string | any = useState("")
    const [popupIsVisible, setPopupIsVisible] = useState(false)

    const increaseFontSize = () => {
        if (props.fontSize < 100) {
            props.setFontSize(props.fontSize + 5)
        };
    };

    const decreaseFontSize = () => {
        if (props.fontSize > 10) {
            props.setFontSize(props.fontSize - 5)
        };
    };

    const saveProgress = () => {
        appsData.push({
            name: newFileName === "" ? "filetext.ntpd" : newFileName + ".ntpd",
            type: "notepad",
            icon: "https://th.bing.com/th/id/R.d2a13e8837af8f556306f2f15baa9f99?rik=lHb3ue49%2byZUlQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpaomedia%2fsmall-n-flat%2f1024%2fnotepad-icon.png&ehk=AVqy7iYtmxyD2CRz2PtqdgraXYzoaUXvwxAt0%2bWjUEI%3d&risl=&pid=ImgRaw&r=0",
            isPinned: false,
            id: appsData.length,
            isOpen: false,
            value: props.progress,
        })
        console.log(appsData);
    };

    return (
        <NotepadButtonsWrapper popupIsVisible={popupIsVisible}>
            <button className="font_btn" onClick={() => increaseFontSize()}>+</button>
            <p>fontsize: {props.fontSize}px</p>
            <button className="font_btn" onClick={() => decreaseFontSize()}>-</button>
            <button className="save_btn" onClick={() => setPopupIsVisible(true)}>Save</button>
            <div className="save_as_pupup">
                <div className="save_as_popup_content">
                    <input maxLength={15} placeholder="file name" onChange={(e) => setNewFileName(e.target.value)}></input>
                    <button onClick={() => saveProgress()}>Save as</button>
                    <button onClick={() => setPopupIsVisible(false)}>Cancel</button>
                </div>
            </div>
            
        </NotepadButtonsWrapper>
    )
};

export default NotepadButtons;