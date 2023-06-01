import { Body } from "../fragments/typography/Body"
import { Title3 } from "../fragments/typography/Title3"
import { StyledSection } from "./style"
import { StyledPrice } from "../fragments/typography/StyledPrice"

export const TotalMoney = () => {
    return (
        <StyledSection>
            <div className="header">
                <Title3>valor total</Title3>
                <StyledPrice>R$ 8,000</StyledPrice>
            </div>
            <Body>Valor se refere ao saldo</Body>
        </StyledSection>
    )
}