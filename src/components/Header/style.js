import styled from "styled-components";

export const StyledHeader = styled.header`
    height: clamp(7rem, 20vh, 9rem);
    display: flex;
    align-items: center;
    padding: 0 2rem;
    box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

    img {
        width: clamp(11.3rem, 20vw, 12.2rem);;
    }
`