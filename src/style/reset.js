import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
* {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        font-family: 'Nunito', sans-serif;
    }

    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
    }
`