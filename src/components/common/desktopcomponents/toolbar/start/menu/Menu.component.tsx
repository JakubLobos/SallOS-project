import { FC } from "react";
import StyledMenu from "./Menu.style";

interface MenuProps {
    handleMenuDisplay: boolean;
}

const Menu:FC<MenuProps> = (props) => {

    return (
        <StyledMenu isOpen={props.handleMenuDisplay}>
            
        </StyledMenu>
    )
}

export default Menu;