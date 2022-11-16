interface palleteProps {
    background?: string,
    StartPageBackground?: string,
    LoadingPageBackground?: string,
    ScrollbarColor?: string,
    mainBlurColor?: string,
    utilsColor?: string;
}

const lightPallete:palleteProps = {
    StartPageBackground: "#303030",
    LoadingPageBackground: "#2263AE",
    ScrollbarColor: "#f5f5f5",
    mainBlurColor: "#91b6b181",
    utilsColor: "#2263AE",
};

const darkPallete:palleteProps = {
    StartPageBackground: "#303030",
    LoadingPageBackground: "#2263AE",
    ScrollbarColor: "#f5f5f5",
    mainBlurColor: "#6d959078",
    utilsColor: "#2263AE",
};

export const themes = {
    lightTheme: lightPallete,
    darkTheme: darkPallete,
} as any;