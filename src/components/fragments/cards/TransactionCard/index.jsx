import { StyledButton } from "../../buttons/StyledButtons"
import { Body } from "../../typography/Body"
import { Title3 } from "../../typography/Title3"
import { Card } from "./Card"

export const TransactionCard = ({transaction, removeTransactionFromList}) => {
    let typeText = ""
    transaction.transactionType === "positive" ? typeText="Entrada" : typeText ="Despesa"

    const ammount = parseFloat(transaction.ammount).toLocaleString('pt-BR', {currency: 'BRL', style: 'currency'})

    return (
        <Card className="card-container" transaction={transaction.transactionType}>
            <div className="card-shadow">
                <div className="card-header">
                    <Title3>{transaction.description}</Title3>
                    <Body>{ammount}</Body>
                </div>
                <div className="card-footer">
                    <Body>{typeText}</Body>
                    <StyledButton mode="remove" className="card-button"
                    onClick={() => {removeTransactionFromList(transaction.id)}}>Excluir</StyledButton>
                </div>
            </div>
        </Card>
    )
}