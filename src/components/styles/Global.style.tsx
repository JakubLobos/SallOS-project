import { createGlobalStyle } from "styled-components";
import { themes } from "../styles/Themes"

interface GlobalStyleProps {
    backgroundcolor?: string;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps & {theme: any}>`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Signika Negative';
    }

    body {
        display: flex;
        width: 100%;
        min-height: 100vh;
        height: fit-content;
        background-color: ${props => 
        props.backgroundcolor ? props.backgroundcolor : props.theme.LoadingPageBackground};
    }

    /* ScrollBar */
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.ScrollbarColor};
    }
    
    #root {
            width: 100%;
            height: fit-content;
        }

    /* vietnamese */
    @font-face {
        font-family: 'Signika Negative';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/signikanegative/v20/E21x_cfngu7HiRpPX3ZpNE4kY5zKSPmJXkF0VDD2RAqnS43kvdlSuA.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
        font-family: 'Signika Negative';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/signikanegative/v20/E21x_cfngu7HiRpPX3ZpNE4kY5zKSPmJXkF0VDD2RAqnS43lvdlSuA.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Signika Negative';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/signikanegative/v20/E21x_cfngu7HiRpPX3ZpNE4kY5zKSPmJXkF0VDD2RAqnS43rvdk.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
`

export default GlobalStyle;