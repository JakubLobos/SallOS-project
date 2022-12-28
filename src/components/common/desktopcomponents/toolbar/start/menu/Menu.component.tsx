import { FC } from "react";
import CategoryHeading from "../../../../categoryheading/CategoryHeading.component";
import AuthorSection from "./author/AuthorSection.component";
import ControlSection from "./controlsection/ControlSection.component";
import LastestLaunch from "./lastest/Lastest.component";
import StyledMenu from "./Menu.style";
import Tools from "./tools/Tools.component";

interface MenuProps {
    handleMenuDisplay: boolean;
}

const Menu:FC<MenuProps> = (props) => {

    return (
        <StyledMenu isOpen={props.handleMenuDisplay}>
            <LastestLaunch />
            <Tools />
            <AuthorSection />
            <ControlSection />
        </StyledMenu>
    )
}

export default Menu;