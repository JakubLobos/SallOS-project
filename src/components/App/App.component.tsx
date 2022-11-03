import { FC, useState } from "react";
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import Authorize from "../../pages/authorize/Authorize.component";
import LoadingScreen from "../../pages/loadingscreen/LoadingScreen.component";
import StartPage from "../../pages/startpage/StartPage.component";
import { getAuthPage, getDesktopPage, getLoadingPageLink, getStartPage } from "../service/Links.service";
import GlobalStyle from "../styles/Global.style";
import { themes } from "../styles/Themes";
import Desktop from "../../pages/desktop/Desktop.component";

const App: FC = () => {
    const [handleTheme, setHandleTheme] = useState<string>("lightTheme");

    return (
        <ThemeProvider theme={themes[handleTheme]}>
            <GlobalStyle />
                <Routes>
                    <Route path={getStartPage()} element={<StartPage />} />
                    <Route path={getLoadingPageLink()} element={<LoadingScreen />} />
                    <Route path={getAuthPage()} element={<Authorize />} />
                    <Route path={getDesktopPage()} element={<Desktop />} />    
                    <Route path="*" element={<h1>Page not found!</h1>} />
                </Routes>
        </ThemeProvider>
    );
};

export default App;