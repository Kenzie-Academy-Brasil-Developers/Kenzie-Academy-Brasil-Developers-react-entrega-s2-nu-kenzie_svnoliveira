import { StyledButton } from "../fragments/buttons/StyledButtons"
import { StyledInputs, StyledSelect } from "../fragments/inputs/StyledInputs"
import { Body } from "../fragments/typography/Body"
// import { Title2 } from "../fragments/typography/Title2"
// import { Title3 } from "../fragments/typography/Title3"
import { Title4 } from "../fragments/typography/Title4"
import { StyledForm } from "./style"

export const Form = () => {
    return (
        <StyledForm>
            <Title4 >Descrição</Title4>
            <StyledInputs type="text" placeholder="Digite sua descrição" required />
            <Body>Ex: Compras de Roupas</Body>
            <Title4>Valor (R$)</Title4>
            <StyledInputs type="number" placeholder="1" required />
            <Title4>Tipo de Valor</Title4>
            <StyledSelect name="transaction-type" id="transaction-type">
                <option value="positive">Entrada</option>
                <option value="negative">Saída</option>
            </StyledSelect>
            <StyledButton mode="main" type="submit">Inserir valor</StyledButton>
        </StyledForm>
    )
}