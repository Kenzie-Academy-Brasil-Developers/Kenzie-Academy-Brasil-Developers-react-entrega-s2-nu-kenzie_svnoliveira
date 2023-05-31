import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 62.5%;

        --color-primary: #FD377E;
        --color-primary-2: #E34981;
        --color-Secondary: #03B898;
        --grey-1: #F8F9FA;
        --grey-2: #E9ECEF;
        --grey-3: #868E96;
        --grey-4: #212529;
    }

    body {
        background-color: var(--grey-1);
    }
`