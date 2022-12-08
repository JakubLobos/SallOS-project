import { FC, useEffect, useState } from "react";
import StyledNotepad from "./notepad.style";
import NotepadButtons from "./notepadbuttons/NotepadButtons.component";

interface NotepadProps {
    app?: any,
}

const Notepad: FC<NotepadProps> = (props) => {

    const [fontSize, setFontSize] = useState(40);
    const [progress, setProgress] = useState<string>("");

    useEffect(() => {
        setProgress(props.app.value)
    }, [props.app.value]);
    
    return (
        <StyledNotepad fontsize={fontSize}>
            <textarea onChange={(e) => setProgress(e.target.value)} placeholder="type here..." value={progress}></textarea>
            <NotepadButtons
                progress={progress}
                setFontSize={setFontSize}
                fontSize={fontSize}
            />
        </StyledNotepad>
    )
};

export default Notepad;