import { TransactionCard } from "../fragments/cards/TransactionCard"
import { Title3 } from "../fragments/typography/Title3"
import { StyledSection } from "./style"


export const List = () => {
    return (
        <>
        <StyledSection>
            <Title3>Resumo Financeiro</Title3>
            <ul>
                <TransactionCard transaction="positive" />
                <TransactionCard />
            </ul>
        </StyledSection>
        </>
    )
}