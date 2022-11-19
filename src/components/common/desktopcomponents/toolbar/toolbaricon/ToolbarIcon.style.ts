import styled from "styled-components";

const StyledToolbarIcon = styled.button`
    min-height: 100%;
    width: 44px;
    background-color: transparent;
    border: none;
    transition: .2s;
    
    &:active {opacity: 60%;}
    &:hover {background-color: rgba(255, 255, 255, 0.27);}

    & img {
        height: 32px;
    }
`

export default StyledToolbarIcon;