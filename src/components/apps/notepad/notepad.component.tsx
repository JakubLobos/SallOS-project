import { FC, useState } from "react";
import StyledNotepad from "./notepad.style";

const Notepad: FC = () => {

    const [fontSize, setFontSize] = useState(() => { return (40) });
    const [progress, setProgress]:string | any = useState();

    const increaseFontSize = () => {
        if (fontSize < 100) {
            setFontSize(fontSize + 5)
        }
    }

    const decreaseFontSize = () => {
        if (fontSize > 10) {
            setFontSize(fontSize - 5)
        }
    }

    return (
        <StyledNotepad fontsize={fontSize}>
            <textarea onChange={(e) => setProgress(e.target.value)} placeholder="type here..." value={progress}></textarea>
            <div>
                <button onClick={() => increaseFontSize()}>+</button>
                <button onClick={() => decreaseFontSize()}>-</button>
            </div>
        </StyledNotepad>
    )
};

export default Notepad;