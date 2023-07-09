import { useState } from "react"
import { Button } from "../button/Button"
import { FormAddITem } from "../forms/modals/FormAddItem"
import "./table.css"

export const Table = () => {
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);

    const handleToggleFormAddITem = () => {
        setIsFormModalOpen(prevState => !prevState);
    }
    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                <tr>
                    <th>Imagem</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Quantidade</th>
                    <th>Obrigatório</th>
                    <th>
                        <Button 
                            onClick={handleToggleFormAddITem}
                            text="Adicionar"
                        /> 
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                </tr>
                </tbody>
        </table>
        <FormAddITem 
            showForm={isFormModalOpen} 
            onClick={handleToggleFormAddITem}
        />
      </div>
    )
}