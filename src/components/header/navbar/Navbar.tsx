import { useState } from "react";
import { LoginForm } from "../../forms/login/LoginForm";
import Logo from "../../../assets/logo.svg"
import "./navbar.css";

export const Navbar = () => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const handleToggleLoginForm = (): void => {
        setShowForm(prevState => !prevState);
    }
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img 
                    className="navbar-logo-image" 
                    src={Logo} 
                    alt="Logo"
                />
            </div>
            <div className="navbar-content">
                <div className="navbar-title">
                    Cadastro de Materiais
                </div>
                <span style={{ cursor: "pointer" }} onClick={handleToggleLoginForm}>Não possui uma conta? Cadastre-se</span>
            </div>
            <LoginForm 
                showForm={showForm} 
                onClick={handleToggleLoginForm}
            />
      </nav>
       
    )
}