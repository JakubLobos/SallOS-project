import styled from "styled-components"
import DesktopBlurElement from "../desktopblurelement/DesktopBlurElement.style"

const StyledToolbar = styled(DesktopBlurElement)`
    width: 1000px;
    height: 42px;
    border-radius: 0 30px 30px 0;
    padding: 0 10px 0 10px;

    @media (max-width: 1000px) {
        width: 60%;
        
    };
`

export default StyledToolbar;