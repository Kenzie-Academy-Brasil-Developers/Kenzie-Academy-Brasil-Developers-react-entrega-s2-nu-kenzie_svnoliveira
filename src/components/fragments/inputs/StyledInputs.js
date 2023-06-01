import styled from "styled-components";

export const StyledInputs = styled.input`
    background-color: var(--grey-1);
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--grey-4);
    padding: 1.1rem 1.6rem;
    border-radius: 0.8rem;

    &::placeholder {
        color: var(--grey-3);
    }
`

export const StyledSelect = styled.select`
    background-color: var(--grey-1);
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--grey-4);
    padding: 1.1rem 1.6rem;
    border-radius: 0.8rem;
`