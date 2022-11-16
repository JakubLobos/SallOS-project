import styled from "styled-components";

const StyledAppWindowHeading = styled.header`
    height: 45px;
    width: 100%;
    display: flex;
    align-items: center;
    user-select: select;
    position: relative;

    &::after {
        display: block;
        content: '';
        width: 100%;
        height: 2px;
        background-color: #fff;
        position: absolute;
        bottom: 3px;
    }

    & div {
        display: flex;
        align-items: center;
        justify-content: baseline;
    }

    & p {
        margin-left: 5px;
        margin-top: 2px;
        color: #fff;
    }
`

export default StyledAppWindowHeading;