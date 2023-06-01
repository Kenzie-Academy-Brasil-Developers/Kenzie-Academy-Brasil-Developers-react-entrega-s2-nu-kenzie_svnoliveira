import { TransactionCard } from "../fragments/cards/TransactionCard"


export const List = () => {
    return (
        <section>
            <h2>Resumo Financeiro</h2>
            <ul>
                <TransactionCard transaction="positive" />
            </ul>
        </section>
    )
}