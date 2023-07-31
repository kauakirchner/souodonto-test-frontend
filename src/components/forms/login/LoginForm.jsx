import { useState } from 'react';
import { UserService } from "../../../services/users"
import { Button } from "../../button/Button";
import { Notification } from "../../notification/Notification";
import '../form.css';

export const LoginForm = ({ showForm, onClick }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userConfirmedPassword, setUserConfirmedPassword] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    const payload = {
      "userName": productName,
      "userEmail": productBrand,
      "userPassword": productQuantity,
    }

    await UserService.create(payload);
    handleShowNotification();
    clearForm();
  }

  const handleShowNotification = () => {
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  }

  const clearForm = () => {
    setUserName('');
    setUserPassword('');
    setUserEmail('');
    setUserConfirmedPassword(false);
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
            <h2 className="form-title">Login</h2>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="userName">Nome</label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-field"
                  id="userName"
                  value={userName}
                  placeholder="Digite seu nome"
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="userEmail">E-mail</label>
                <input
                  autoComplete="off"
                  type="email"
                  className="form-field"
                  id="userEmail"
                  placeholder="Digite seu e-mail"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="userPassword">Senha</label>
                <input
                  autoComplete="off"
                  type="password"
                  placeholder="Digite sua senha"
                  id="userPassword"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="userConfirmedPassword">Confirme sua senha</label>
                <input
                  autoComplete="off"
                  type="password"
                  placeholder="Confirme sua senha"
                  id="userConfirmedPassword"
                  value={userConfirmedPassword}
                  onChange={(e) => setUserConfirmedPassword(e.target.value)}
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
              message="Login feito com sucesso :)" 
              type="success"
              duration={3000}           
            />
          )}
        </div>
      )}
    </>
  );
}


