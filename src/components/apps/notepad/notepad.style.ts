import styled from "styled-components";

interface StyledNotepadProps {
    fontsize?: number;
}

const StyledNotepad = styled.div<StyledNotepadProps>`
    width: 100%;
    height: 100%;

    & textarea {
        width: 100%;
        height: 90%;
        resize: none;
        font-size: ${props => props.fontsize ? props.fontsize : 40}px;
        outline: transparent;
        border: none;
    }
`

export default StyledNotepad;