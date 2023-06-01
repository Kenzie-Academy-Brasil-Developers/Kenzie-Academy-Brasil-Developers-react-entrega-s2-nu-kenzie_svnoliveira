import { StyledButton } from "../fragments/buttons/StyledButtons"
import { StyledInputs, StyledSelect } from "../fragments/inputs/StyledInputs"
import { Title1 } from "../fragments/typography/Title1"
import { Title2 } from "../fragments/typography/Title2"
import { Title3 } from "../fragments/typography/Title3"
import { Title4 } from "../fragments/typography/Title4"

export const Form = () => {
    return (
        <form>
            <Title1 >descrição</Title1>
            <StyledInputs type="text" placeholder="Digite sua descrição" required />
            <Title2>Ex: Compras de Roupas</Title2>
            <Title3>Valor (R$)</Title3>
            <StyledInputs type="number" placeholder="1" required />
            <Title4>Tipo de Valor</Title4>
            <StyledSelect name="transaction-type" id="transaction-type">
                <option value="positive">Entrada</option>
                <option value="negative">Saída</option>
            </StyledSelect>
            <StyledButton mode="main" type="submit">Inserir valor</StyledButton>
        </form>
    )
}