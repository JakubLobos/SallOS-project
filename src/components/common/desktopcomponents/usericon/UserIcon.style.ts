import styled from "styled-components";

interface StyledUserIconProps {
    bgcolor: string,
}

const StyledUserIcon = styled.img<StyledUserIconProps>`
    width: 51px;
    height: 51px; 
    background-color: ${props => props.bgcolor === "" ? props.theme.utilsColor : props.bgcolor} ;
    border-radius: 200px;
`

export default StyledUserIcon;