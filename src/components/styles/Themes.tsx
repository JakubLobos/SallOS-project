interface palleteProps {
    background?: string,
    StartPageBackground?: string,
    LoadingPageBackground?: string,
    ScrollbarColor?: string,
    mainBlurColor?: string,
    utilsColor?: string,
    notepadBackgroundColor?: string,
    mainFontColor?: string,
    userIconColor?: string,
}

const lightPallete:palleteProps = {
    StartPageBackground: "#303030",
    LoadingPageBackground: "#2263AE",
    ScrollbarColor: "#f5f5f5",
    mainBlurColor: "#a1acaa5c",
    utilsColor: "#2263AE",
    notepadBackgroundColor: "#fff",
    mainFontColor: "#000",
};

const darkPallete:palleteProps = {
    StartPageBackground: "#303030",
    LoadingPageBackground: "#2263AE",
    ScrollbarColor: "#f5f5f5",
    mainBlurColor: "#23252578",
    utilsColor: "#102f53",
    notepadBackgroundColor: "#292828",
    mainFontColor: "#c2c2c2",
};

export const themes = {
    lightTheme: lightPallete,
    darkTheme: darkPallete,
} as any;