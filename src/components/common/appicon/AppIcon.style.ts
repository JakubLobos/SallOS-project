import styled from "styled-components";

const StyledAppIcon = styled.button`
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: transparent;
    border: none;
    transition: .2s;
    border-radius: 10px;
    &:active {opacity: 60%;}
    &:hover {background-color: rgba(255, 255, 255, 0.27);}

    & img {
        width: 47px;
        height: auto;
    }

    & p {
        font-size: 12px;
        color: #fff;
        text-shadow: 1px 2px 2px #000;
    }
`

export default StyledAppIcon