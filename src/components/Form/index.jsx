
export const Form = () => {
    return (
        <form>
            <span>descrição</span>
            <input type="text" placeholder="Digite sua descrição" required />
            <span>Ex: Compras de Roupas</span>
            <span>Valor (R$)</span>
            <input type="number" required />
            <span>Tipo de Valor</span>
            <select name="transaction-type" id="transaction-type">
                <option value="positive">Entrada</option>
                <option value="negative">Saída</option>
            </select>
            <button type="submit">Inserir valor</button>
        </form>
    )
}