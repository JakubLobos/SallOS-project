import { FC } from "react";
import LastestLaunch from "./lastest/Lastest.component";
import StyledMenu from "./Menu.style";

interface MenuProps {
    handleMenuDisplay: boolean;
}

const Menu:FC<MenuProps> = (props) => {

    return (
        <StyledMenu isOpen={props.handleMenuDisplay}>
            <LastestLaunch />
        </StyledMenu>
    )
}

export default Menu;