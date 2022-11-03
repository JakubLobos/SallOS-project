import { url } from "inspector";
import { StyledAppContent } from "./AppWindow.style";

const AppWindow = () => {

    return (
        <StyledAppContent
            title="app"
            width={700}
            height={700}
            src={("https://www.google.pl/" + "?igu=1")}>

        </StyledAppContent>
    )
}

export default AppWindow;