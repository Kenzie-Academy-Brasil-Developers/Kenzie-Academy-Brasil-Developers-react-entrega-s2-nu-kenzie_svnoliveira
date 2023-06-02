import { StyledButton } from "../fragments/buttons/StyledButtons"
import { StyledInputs, StyledSelect } from "../fragments/inputs/StyledInputs"
import { Body } from "../fragments/typography/Body"
import { useState } from "react"
import { Title4 } from "../fragments/typography/Title4"
import { StyledForm } from "./style"
import { v4 as uuidv4 } from 'uuid'


export const Form = ({setTransactionList}) => {
    
    const [formData, setFormData] = useState({
        id: uuidv4(),
        description: "",
        ammount: "",
        transactionType: "positive",
    })
      
    const addToTransactionList = () => {
        const newTransaction = formData
        setTransactionList((transactionList) => [...transactionList, newTransaction])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addToTransactionList()

        setFormData({
            id: uuidv4(),
            description: "",
            ammount: "",
            transactionType: "positive",
        })
    }



    return (
        <StyledForm onSubmit={handleSubmit}>
            <Title4 >Descrição</Title4>

            <StyledInputs type="text" placeholder="Digite sua descrição" value={formData.description} 
            required onChange={(e)=> setFormData({...formData, description: e.target.value})}/>

            <Body>Ex: Compras de Roupas</Body>
            <Title4>Valor (R$)</Title4>

            <StyledInputs type="number" placeholder="1" value={formData.ammount} 
            required onChange={(e)=> setFormData({...formData, ammount: e.target.value})}/>

            <Title4>Tipo de Valor</Title4>

            <StyledSelect name="transaction-type" id="transaction-type" value={formData.transactionType} 
            onChange={(e)=> setFormData({...formData, transactionType: e.target.value})}>
                <option value="positive">Entrada</option>
                <option value="negative">Despesa</option>
            </StyledSelect>

            <StyledButton mode="main" type="submit">Inserir valor</StyledButton>
        </StyledForm>
    )
}