import { FormEvent, useState } from 'react';
import { UserService } from "../../../services/users";
import { User } from '../../../utils/types/types';
import { Button } from "../../button/Button";
import { Notification } from "../../notification/Notification";
import '../form.css';

interface LoginFormProps {
  showForm: boolean;
  onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
}

export const LoginForm = ({ showForm, onClick }: LoginFormProps) => {
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userConfirmedPassword, setUserConfirmedPassword] = useState<string>("");
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
   
    const payload: User = {
      "userName": userName,
      "userEmail": userEmail,
      "userPassword": userPassword,
    }

    await UserService.create(payload);
    handleShowNotification();
    clearForm();
  }

  const handleShowNotification = (): void => {
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  }

  const clearForm = (): void => {
    setUserName("");
    setUserPassword("");
    setUserEmail("");
    setUserConfirmedPassword("");
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


