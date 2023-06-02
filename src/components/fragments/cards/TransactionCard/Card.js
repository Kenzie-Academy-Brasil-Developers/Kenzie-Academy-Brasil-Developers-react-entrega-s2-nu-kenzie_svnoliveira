import styled from "styled-components";

export const Card = styled.li`
    box-shadow: -4px 0px 0px 0px ${({transaction}) => transaction === "positive"?"rgba(3,184,152,1)": "rgba(233, 236, 239,1)"};
    margin: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.4rem;

    .card-shadow {
        width: 100%;
        background-color: var(--grey-1);
    }
    .card-shadow > div {
        min-height: 8.7rem;
        padding: 0.8rem 1.8rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-around;
    }

    .card-shadow > div > button {
        width: fit-content;
    }
    
    &:hover .card-shadow {
        box-shadow: 0px 4px 42px -12px rgba(0, 0, 0, 0.25);
        background-color: var(--grey-1);
        transition: 0.4s;
    }

    &:hover .card-button {
        background-color: var(--grey-4);
        color: var(--grey-2);
    }
    
    @media (min-width: 770px){
        .card-shadow{
            display: flex;
        }
        .card-footer {
            align-items: flex-end;
        }
    }
`