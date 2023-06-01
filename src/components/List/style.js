import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    ul {
        gap: 1.5rem;
        display: flex;
        flex-direction: column;
        width: min(35.5rem, 96vw);
    }
    
    @media (min-width: 770px){
        ul{
            width: clamp(35.5rem,46vw,56rem);
        }
    }
`