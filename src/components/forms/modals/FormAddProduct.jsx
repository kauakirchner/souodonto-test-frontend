import { Button } from "../../button/Button";
import { useState } from 'react';
import { createProduct } from "../../../services/create-product";
import { Notification } from "../../notification/Notification";
import '../form.css';

export const FormAddProduct = ({ showForm, onClick }) => {
  const [productName, setProductName] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [isProductRequired, setIsProductRequired] = useState(false);
  const [productImage, setProductImage] = useState('');
  const [showNotification, setShowNotification] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = {
      "productName": productName,
      "productBrand": productBrand,
      "productQuantity": productQuantity,
      "isProductRequired": isProductRequired,
      "productImage": productImage
    }

    await createProduct(formData);
    handleShowNotification();
    clearForm();
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => setProductImage(event.target.result);
    reader.readAsDataURL(file);
  }

  const handleShowNotification = () => {
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  }



  const clearForm = () => {
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


