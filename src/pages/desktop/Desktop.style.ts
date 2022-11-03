import styled from "styled-components";
import { useDesktopSettings } from "../../utilities/globalzustandstates/DesktopSettings";
import wallpaper from "../../../img/static/wallpapers/mountains.jpg"

interface StyledDesktopProps {
    wallpaper: any;
}

const StyledDesktop = styled.section<StyledDesktopProps>`
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.wallpaper});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
`

export default StyledDesktop;