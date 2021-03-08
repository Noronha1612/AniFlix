import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        font-family: 'Netflix Sans Icon', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    button, a {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: initial;
    }
`;