import styled from "styled-components";

const StyledAppWindowHeading = styled.header`
    height: 45px;
    width: 100%;
    display: flex;
    align-items: center;
    user-select: select;
    background-color: red;

    &:-moz-drag-over {
        cursor: pointer;
    }
    &:active {cursor: move;}
`

export default StyledAppWindowHeading;