import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    transition: 0.4s;

    ${({mode}) => {
        switch(mode){
            case "main":
            return css`
            background-color: var(--color-primary);
            font-size: 1.6rem;
            font-weight: 600;
            padding: 1.4rem 2rem;
            border-radius: 0.8rem;
            color: var(--grey-1);

            &:hover {
                background-color: var(--color-primary-2);
            }
            `
            case "remove":
            return css`
            background-color: var(--grey-2);
            font-size: 1.4rem;
            font-weight: 400;
            padding: 0.3rem 0.9rem;
            border-radius: 0.2rem;
            color: var(--grey-4);

            &:hover {
                background-color: var(--grey-4);
                color: var(--grey-2);
            }
            `
        }
    }}
`