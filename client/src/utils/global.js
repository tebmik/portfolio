import { createGlobalStyle } from 'styled-components';
// setting font size to 62.5% so that 1rem === 10px
// which will be handy for responsive design
export default createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: grayscale;
    }

    html {
        box-sizing: border-box;
        --color-main: ${props => props.theme.colors.main};
        --color-mainDark: ${props => props.theme.colors.mainDark};
        --color-mainLight: ${props => props.theme.colors.mainLight};
        --color-mainLighter: ${props => props.theme.colors.mainLighter};
        --color-heading: ${props => props.theme.colors.headingColor};
        --color-textLight: ${props => props.theme.colors.textColorLight};
        --color-textDark: ${props => props.theme.colors.textColorDark};
        --color-white: ${props => props.theme.colors.whiteColor};
        --shadow: ${props => props.theme.colors.shadow};
        
        // @media ${props => props.theme.mediaQueries.small} {
        //     font-size: 60%;
        // }
        // @media ${props => props.theme.mediaQueries.smallest} {
        //     font-size: 55%;
        // }
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 1.6;
    }

    a, input, textarea, button {
        outline: none;
        font-family: inherit;
        text-decoration : none;
    }
`;
