import styled from "styled-components";

export const StyledHeader = styled.header`
    height: clamp(7rem, 20vh, 9rem);
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
    margin-bottom: clamp(3rem, 6vw, 4rem);

    #header-container {
        width: min(35.5rem, 96%);
        margin: auto;
    }
    
    img {
        width: clamp(11.3rem, 20vw, 12.2rem);
    }
    
    @media (min-width: 770px){
        #header-container {
            width: min(96vw, 98rem);
        }
    }
`