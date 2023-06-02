import { Body } from "../fragments/typography/Body"
import { Title3 } from "../fragments/typography/Title3"
import { StyledSection } from "./style"
import { StyledPrice } from "../fragments/typography/StyledPrice"

export const TotalMoney = ({transactionList}) => {

    const positiveList = transactionList.filter(transaction => transaction.transactionType === "positive")
    const negativeList = transactionList.filter(transaction => transaction.transactionType === "negative")

    const sumTotal = positiveList.reduce((total, item) => {return total + parseFloat(item.ammount)},0) - 
    negativeList.reduce((total, item) => {return total + parseFloat(item.ammount)},0)

    const total = sumTotal.toLocaleString('pt-BR', {currency: 'BRL', style: 'currency'})

    if (transactionList.length === 0){
        return
    } else {
        return (
            <StyledSection>
                <div className="header">
                    <Title3>valor total</Title3>
                    <StyledPrice>{total}</StyledPrice>
                </div>
                <Body>Valor se refere ao saldo</Body>
            </StyledSection>
        )
    }

}