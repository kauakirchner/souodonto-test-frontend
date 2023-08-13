import { FormEvent, SetStateAction, useState, Dispatch, ChangeEvent } from 'react';
import { ProductService } from "../../../services/products";
import { Notification } from "../../notification/Notification";
import { Product } from '../../../utils/types/types';
import { Button } from "../../button/Button";
import '../form.css';

interface FormAddProductProps {
  showForm: boolean;
  onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
  setState: Dispatch<SetStateAction<Product[]>>;
  state: Product
}


export const FormAddProduct = ({ showForm, onClick, state, setState }: FormAddProductProps) => {
  const [productName, setProductName] = useState<string>("");
  const [productBrand, setProductBrand] = useState<string>("");
  const [productQuantity, setProductQuantity] = useState<string>("");
  const [isProductRequired, setIsProductRequired] = useState<boolean>(false);
  const [productImage, setProductImage] = useState<string>("");
  const [showNotification, setShowNotification] = useState<boolean>(false);


  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData: Product = {
      "productName": productName,
      "productBrand": productBrand,
      "productQuantity": productQuantity,
      "isProductRequired": isProductRequired,
      "productImage": productImage
    }
    await ProductService.create(formData);
    setState((prevState) => [...prevState, formData]);
    handleShowNotification();
    clearForm();
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result && typeof event.target?.result === "string") {
        setProductImage(event.target.result)
        reader.readAsDataURL(file as Blob);
      }
    }
  }

  const handleShowNotification = (): void => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  }

  const clearForm = (): void => {
    setProductName('');
    setProductBrand('');
    setProductQuantity('');
    setIsProductRequired(false);
    setProductImage('');
  }
 
  return (
    <>
      {showForm && (
        <div className="form-container">
          <div className="form-content">
            <div className="close-btn-container">
              <Button 
                color="error"
                onClick={onClick}
                text="&times;"
              />
            </div>
            <h2 className="form-title">Cadastrar itens</h2>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="productName">Nome do material</label>
                <input
                  type="text"
                  id="productName"
                  value={productName}
                  placeholder="Digite o nome do material"
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="productBrand">Marca</label>
                <input
                  type="text"
                  id="productBrand"
                  placeholder="Digite a marca do material"
                  value={productBrand}
                  onChange={(e) => setProductBrand(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="productQuantity">Quantidade</label>
                <input
                  type="number"
                  placeholder="Digite a quantidade necessária do material"
                  id="productQuantity"
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(e.target.value)}
                  required
                />
              </div>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="required"
                  checked={isProductRequired}
                  onChange={(e) => setIsProductRequired(e.target.checked)}
                />
                <label htmlFor="isproductRequired">O item é Obrigatório?</label>
              </div>
              <div className="form-group">
                <label htmlFor="productImage" className="file-field">Faça upload da imagem do item</label>
                <input
                  type="file"
                  id="productImage"
                  onChange={handleFileChange}
                  accept="image/*"
                  required
                />
              </div>
              <div className="form-actions">
                <Button 
                  type="submit"  
                  text="Enviar"                
                />
              </div>
            </form>
          </div>
          { showNotification && (
            <Notification 
              message="Material cadastrado com sucesso ;)" 
              type="success"
              duration={3000}           
            />
          )}
        </div>
      )}
    </>
  );
}


