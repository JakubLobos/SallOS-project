import styled from "styled-components";

interface StyledCategoryHeadingProps {
    fontsize: number,
}

const StyledCategoryHeading = styled.header<StyledCategoryHeadingProps>`
    width: 100%;
    font-size: ${props => props.fontsize}px;
    color: #fff;
    text-shadow: 1px 1px 3px #000;
    display: inline-flex;
    align-items: center;
    justify-content: center; 
    word-wrap: unset;

    & h3 {
        min-width: 100px;
        text-align: center;
        margin: 10px;
    }

    & span {
        display: inline;
        content: '';
        width: 100%;
        height: 2px;
        background-color: #fff;
    }

    
`

export default StyledCategoryHeading