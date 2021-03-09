import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        color: #FFF;
    }

    button, a {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: initial;
    }

    body {
        background: #000;
    }
`;