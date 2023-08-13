import { useEffect, useState } from "react";
import { Button } from "../button/Button";
import { FormAddProduct } from "../forms/product/FormAddProduct";
import { ProductService } from "../../services/products";
import { Notification } from "../notification/Notification";
import { Product } from "../../utils/types/types";
import "./table.css"

export const Table = () => {
    const [showForm, setshowForm] = useState<boolean>(false);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [showNotification, setShowNotification] = useState<boolean>(false);

    const handleToggleForm = (): void => {
        setshowForm(prevState => !prevState);
    }

    const handleShowNotification = (): void => {
        setShowNotification(true);
    
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
    }

    useEffect(() => {
        ProductService.getProducts()
        .then((response) => {
            setAllProducts(response)
        })
        .catch(() => {
            handleShowNotification();
        })
    }, [])

    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Imagem</th>
                        <th>Nome</th>
                        <th>Marca</th>
                        <th>Quantidade</th>
                        <th>Obrigatório</th>
                        <th>
                            <Button 
                                onClick={handleToggleForm}
                                text="Adicionar"
                            /> 
                        </th>
                    </tr>
                </thead>
                { allProducts ? (
                    <tbody>
                        {allProducts?.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <img 
                                        className="product-image-small"
                                        src={item.productImage} 
                                        alt=""
                                    />
                                </td>
                                <td>{ item.productName }</td>
                                <td>{ item.productBrand }</td>
                                <td>{ item.productQuantity }</td>
                                <td>{ item.isProductRequired ? "Sim" : "Não" }</td>
                            </tr>
                        ))}
                    </tbody>
                ) : (
                    <span>Nenhum Item Encontrado</span>
                )}
            </table>
            <FormAddProduct 
                showForm={showForm} 
                onClick={handleToggleForm}
                state={allProducts}
                setState={setAllProducts}
            />
            { showNotification && (
                <Notification 
                    message="Ocorreu um erro :(" 
                    type="error"
                    duration={3000}           
                />
            )}
        </div>
    )
}