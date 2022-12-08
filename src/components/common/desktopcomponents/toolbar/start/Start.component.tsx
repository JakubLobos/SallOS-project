import { FC, useState } from "react";
import StyledStart from "./Start.style";
import StartButton from "./startbutton/StartButton.style";
import ButtonDots from "../../../../../img/static/dots.svg"
import Menu from "./menu/Menu.component";

const Start:FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <StyledStart>
            <Menu handleMenuDisplay={isMenuOpen} />
            <StartButton onClick={() => setIsMenuOpen(isMenuOpen ? false : true)}>
                <img
                    alt="button dots"
                    src={ButtonDots} />
            </StartButton>
        </StyledStart>
    )
}

export default Start;