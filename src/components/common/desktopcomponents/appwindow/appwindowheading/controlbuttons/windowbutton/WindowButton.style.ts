import styled from "styled-components";

const StyledWindowButton = styled.button`
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 20px;
    transition: .2s;
    padding: 1px;
    cursor: pointer;

    &:hover { background-color: rgb(211, 17, 34); }
    &:active { scale: 1.1; }
`

export default StyledWindowButton;