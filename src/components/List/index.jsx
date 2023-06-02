import { TransactionCard } from "../fragments/cards/TransactionCard"
import { Title3 } from "../fragments/typography/Title3"
import { Title2 } from "../fragments/typography/Title2"
import { StyledSection } from "./style"


export const List = ({transactionList, setTransactionList}) => {

    const removeTransactionFromList = (transactionID) => {
        setTransactionList((transactionList) => transactionList.filter(transaction => transaction.id !== transactionID))
    }

    return (
        <>
        <StyledSection>
            <Title3>Resumo Financeiro</Title3>
            <ul>
                {transactionList.length === 0 ? <Title2>Você ainda não possui nenhum lançamento</Title2> : 
                transactionList.map(transaction => 
                    <TransactionCard key={transaction.id} transaction={transaction} removeTransactionFromList={removeTransactionFromList}/>
                )}
            </ul>
        </StyledSection>
        </>
    )
}