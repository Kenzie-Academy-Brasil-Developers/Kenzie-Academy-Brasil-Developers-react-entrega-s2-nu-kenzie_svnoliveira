import styled, { css } from "styled-components";

export const StyledText = css`

    ${({mode}) => {
        if (mode === "dark"){
            return css`
            color: var(--grey-1);
            `
        } else {
            return css`
            color: var(--grey-4);
            `
        }
    }}

    ${({size}) => {
        switch(size){
            case "big": 
            return css`
                font-size: 3.8rem;
            `
            case "medium":
            return css`
                font-size: 2.2rem;
            `
            case "small":
            return css`
                font-size: 1.6rem;
            `
            case "tiny":
            return css`
                font-size: 1.2rem;
            `
        }
    }}

    ${({weight}) => {
        switch(weight){
            case "boldest": 
            return css`
                font-weight: 800;
            `
            case "bold":
            return css`
                font-weight: 700;
            `
            case "normal":
            return css`
                font-weight: 600;
            `
            case "light":
            return css`
                font-weight: 400;
            `
        }
    }}
`

export  const Text = styled.span`
    ${StyledText}
`