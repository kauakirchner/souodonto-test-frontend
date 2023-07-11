import { useCallback, useEffect, useState } from "react";
import { Button } from "../button/Button";
import { FormAddProduct } from "../forms/modals/FormAddProduct";
import { getProducts } from "../../services/get-product";
import { Notification } from "../notification/Notification";
import "./table.css"
import { ExpandedProductImage } from "../expanded-product-image/ExpandedProductImage";

export const Table = () => {
    const [showForm, setshowForm] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [showNotification, setShowNotification] = useState(false);
    const [showExpandedImage, setShowExpandedImage] = useState(false);

    const handleToggleExpandedImage = useCallback((value) => {
        setShowExpandedImage(value);
    }, []);


    const handleToggleForm = () => {
        setshowForm(prevState => !prevState);
    }

    const handleShowNotification = () => {
        setShowNotification(true);
    
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
    }

    useEffect(() => {
       getProducts()
        .then((response) => {
            setAllProducts(response)
        })
        .catch(() => {
            handleShowNotification();
        })
    }, [allProducts])

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
                <tbody>
                    {allProducts.map((product, index) => (
                        <tr key={index}>
                            <td>
                                <img 
                                    className="product-image-small" 
                                    src={product.productImage} 
                                    onClick={() => handleToggleExpandedImage(true)}
                                    alt=""
                                />
                                <ExpandedProductImage 
                                    showImage={showExpandedImage}
                                    image={product.productImage}
                                    onClick={() => handleToggleExpandedImage(false)}
                                />
                            </td>
                            <td>{ product.productName }</td>
                            <td>{ product.productBrand }</td>
                            <td>{ product.productQuantity }</td>
                            <td>{ product.isProductRequired ? "Sim" : "Não" }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <FormAddProduct 
                showForm={showForm} 
                onClick={handleToggleForm}
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