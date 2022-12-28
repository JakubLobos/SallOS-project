import styled from "styled-components";

const StyledAuthorSection = styled.section`
    width: 100%;
    height: auto;

    & p {
        color: #fff;
        text-align: center;
        font-size: 18px;
        line-height: 30px;
    }

    & a {
        color: ${props => props.theme.utilsColor};
        background-color: rgba(255, 255, 255, .8);
        border-radius: 3px;
        padding: 2px;
    }
`

export default StyledAuthorSection;