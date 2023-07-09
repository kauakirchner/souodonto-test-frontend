import { Button } from "../../button/Button";
import { useState } from 'react';
import './form.css';

export const FormAddITem = ({ showForm, onClick }) => {
  const [itemName, setitemName] = useState('');
  const [itemBrand, setitemBrand] = useState('');
  const [itemQuantity, setitemQuantity] = useState('');
  const [isItemRequired, setisItemRequired] = useState(false);
  const [itemImage, setitemImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form data:', {
      itemName,
      itemBrand,
      itemQuantity,
      isItemRequired,
      itemImage
    });

    clearForm();
  };

  const clearForm = () => {
    setitemName('');
    setitemBrand('');
    setitemQuantity('');
    setisItemRequired(false);
    setitemImage('');
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setitemImage(file);
  };

  return (
   
    <>
      {showForm && (
        <div className="form-container">
          <div className="form-content">
            <Button 
              type="error"
              onClick={onClick}
              text="&times;"
              className="close-btn"
            />
            <h2 className="form-title">Cadastrar itens</h2>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="itemName">Nome do material</label>
                <input
                  type="text"
                  id="itemName"
                  value={itemName}
                  placeholder="Digite o nome do material"
                  onChange={(e) => setitemName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="itemBrand">Marca</label>
                <input
                  type="text"
                  id="itemBrand"
                  placeholder="Digite a marca do material"
                  value={itemBrand}
                  onChange={(e) => setitemBrand(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="itemQuantity">Quantidade</label>
                <input
                  type="number"
                  placeholder="Digite a quantidade necessária do material"
                  id="itemQuantity"
                  value={itemQuantity}
                  onChange={(e) => setitemQuantity(e.target.value)}
                  required
                />
              </div>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="required"
                  checked={isItemRequired}
                  onChange={(e) => setisItemRequired(e.target.checked)}
                  required
                />
                <label htmlFor="isItemRequired">O item é Obrigatório?</label>
              </div>
              <div className="form-group">
                <label htmlFor="itemImage" className="file-field">Faça upload da imagem do item</label>
                <input
                  type="file"
                  id="itemImage"
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
        </div>
      )}
    </>
  );
}


