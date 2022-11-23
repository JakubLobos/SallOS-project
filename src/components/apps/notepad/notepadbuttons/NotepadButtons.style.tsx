import styled from "styled-components";

interface NotepadButtonsWrapperProps {
    popupIsVisible: boolean,
}

const NotepadButtonsWrapper = styled.div<NotepadButtonsWrapperProps>`
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.notepadBackgroundColor};
    color: ${props => props.theme.mainFontColor};
    border-radius: 0 0 20px 20px;
    min-height: 9%;
    
    & button {
        min-width: 40px;
        padding: 2px;
        height: 40px;
        font-size: 20px;
        background-color: transparent;
        border: 1px solid ${props => props.theme.mainFontColor};
        color: ${props => props.theme.mainFontColor};
        border-radius: 4px;
        margin: 5px;
        cursor: pointer;
        transition: .2s;
    }

    & button:hover {
        box-shadow: 2px 2px 3px #1b1b1b6c;
    }

    & .font_btn {
       margin: 0 20px 0 20px;
    }

    & .save_btn {
        margin: 0 20px 0 auto;
        width: 100px;
    }

    & input {
        width: 200px;
        height: 39px;
        font-size: 20px;
        padding: 2px;
        margin-right: 30px;
    }

    .save_as_pupup {
        display: ${props => props.popupIsVisible ? "block" : "none"};
        position: absolute;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(4px) brightness(70%);
        top: 0;
        z-index: 1;
        overflow: hidden;
    }

    @keyframes showPopupContent {
        0% {
            transform: translateY(-150%);
        }

        100% {
            transform: translateY(0%);
        }
    }

    & .save_as_popup_content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 20%;
        background-color: ${props => props.theme.notepadBackgroundColor};
        color: ${props => props.theme.mainFontColor};
        box-shadow: 2px 2px 3px #1b1b1b4c;
        border-radius: 0 0 20px 20px;
        padding: 0 10px 0 10px;
        animation: showPopupContent .3s linear;
    }

`

export default NotepadButtonsWrapper;