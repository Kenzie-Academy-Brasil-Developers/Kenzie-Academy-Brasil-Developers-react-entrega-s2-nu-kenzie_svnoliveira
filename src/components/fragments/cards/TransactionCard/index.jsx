import { StyledButton } from "../../buttons/StyledButtons"
import { Body } from "../../typography/Body"
import { Title3 } from "../../typography/Title3"
import { Card } from "./Card"

export const TransactionCard = ({transaction}) => {
    return (
        <Card className="card-container" transaction={transaction}>
            <div className="card-shadow">
                <div className="card-header">
                    <Title3>Description Value</Title3>
                    <Body>R$ 00,00</Body>
                </div>
                <div className="card-footer">
                    <Body>Type value</Body>
                    <StyledButton mode="remove" className="card-button">Excluir</StyledButton>
                </div>
            </div>
        </Card>
    )
}