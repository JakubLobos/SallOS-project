import { FC, useState } from "react";
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import { getAuthPage, getDesktopPage, getLoadingPageLink, getStartPage } from "../components/service/Links.service";
import GlobalStyle from "../components/styles/Global.style";
import { themes } from "../components/styles/Themes";

import AuthorizePage from "../pages/authorize";
import DesktopPage from "../pages/desktop";
import LoadingScreenPage from "../pages/loadingscreen";
import StartPage from "../pages/startpage";
import { useDesktopSettings } from "../utilities/globalzustandstates/DesktopSettings";

const App: FC = () => {
    const {desktopSettings} = useDesktopSettings();
    console.log(desktopSettings)

    return (
        <ThemeProvider theme={themes[desktopSettings.theme]}>
            <GlobalStyle />
                <Routes>
                    <Route path={getStartPage()} element={<StartPage />} />
                    <Route path={getLoadingPageLink()} element={<LoadingScreenPage />} />
                    <Route path={getAuthPage()} element={<AuthorizePage />} />
                    <Route path={getDesktopPage()} element={<DesktopPage />} />    
                    <Route path="*" element={<h1>Page not found!</h1>} />
                </Routes>
        </ThemeProvider>
    );
};

export default App;