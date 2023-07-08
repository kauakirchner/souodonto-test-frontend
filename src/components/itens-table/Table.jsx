import { useState } from "react"
import { Button } from "../button/Button"
import "./table.css"

export const Table = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModalAddItem = () => {
        console.log("do something")
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
                        <Button onClick={handleOpenModalAddItem} /> 
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
      </div>
    )
}