import { FC } from "react";
import StyledCategoryHeading from "./CategoryHeading.style";

interface CategoryHeadingProps {
    content: string,
}

const CategoryHeading:FC<CategoryHeadingProps> = (props) => {
    
    return (
        <StyledCategoryHeading fontsize={14}>
            <span></span>
            <h3>{props.content} </h3>
            <span></span>
        </StyledCategoryHeading>
    )
}

export default CategoryHeading;