import styled from "styled-components";

interface StyledToolbarIconProps {
    isMinimized: boolean,
    isOpen: boolean,
}

const StyledToolbarIcon = styled.button<StyledToolbarIconProps>`
    display: flex-inline;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    width: 44px;
    background-color: transparent;
    border: none;
    transition: .2s;
    margin-right: 6px;

    border-bottom: 3px solid ${props => props.isOpen ? "green" : "none"};
    border-bottom: 3px solid ${props => props.isMinimized ? "red" : "none"};
    
    &:active {opacity: 60%;}
    &:hover {background-color: rgba(255, 255, 255, 0.27);}

    & img {
        height: 32px;
    }
`

export default StyledToolbarIcon;