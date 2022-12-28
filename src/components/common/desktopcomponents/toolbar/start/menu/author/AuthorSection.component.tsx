import { FC } from "react";
import CategoryHeading from "../../../../../categoryheading/CategoryHeading.component";
import StyledAuthorSection from "./AuthorSection.style";

const AuthorSection:FC = () => {

    return (
        <StyledAuthorSection>
            <CategoryHeading content={"Author"} />
            <p>Developed with  &#9829; by <a href="https://github.com/JakubLobos">Jakub Łobos</a> in cooperation with <a href="https://webrance.com/">Webrance.com</a></p>
        </StyledAuthorSection>
    )
}

export default AuthorSection;