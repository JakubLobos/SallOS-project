import styled from "styled-components";
import DesktopBlurElement from "../desktopblurelement/DesktopBlurElement.style";

const WindowWrapper = styled(DesktopBlurElement)`
    padding: 20px;
    min-height: 500px;
    min-width: 500px;
    display: flex;
    width: fit-content;
    flex-direction: column;
    resize: both;
    overflow: auto;

    & img {
        width: 23px;
    }
`;

export default WindowWrapper;