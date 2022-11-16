import { FC } from "react"
import StyledAppIframeContent from "./AppIframeContent.style"

interface AppIframeContentProps {
    src: string,
}

const AppIframeContent:FC<AppIframeContentProps> = (props) => {
    
    return (
        <StyledAppIframeContent
            title="app"
            src={props.src}>
        </StyledAppIframeContent>
    )
}

export default AppIframeContent;