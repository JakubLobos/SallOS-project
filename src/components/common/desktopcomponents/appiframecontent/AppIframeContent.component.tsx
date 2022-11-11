import { FC } from "react"
import StyledAppIframeContent from "./AppIframeContent.style"

const AppIframeContent:FC = () => {
    
    return (
        <StyledAppIframeContent
            title="app"
            width={700}
            height={700}
            src={("https://www.google.pl/?igu=1")}>
        </StyledAppIframeContent>
    )
}

export default AppIframeContent;