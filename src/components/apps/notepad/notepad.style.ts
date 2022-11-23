import styled from "styled-components";

interface StyledNotepadProps {
    fontsize?: number;
}

const StyledNotepad = styled.div<StyledNotepadProps>`
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 3;

    & textarea {
        width: 100%;
        height: 90%;
        resize: none;
        font-size: ${props => props.fontsize ? props.fontsize : 40}px;
        outline: transparent;
        border: none;
        color: ${props => props.theme.mainFontColor};
        background-color: ${props => props.theme.notepadBackgroundColor};
    }
`

export default StyledNotepad;