import "./navbar.css";

import Logo from "../../../assets/logo.svg"


export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img
                    className="navbar-logo-image"
                    src={Logo}
                    alt="Logo"
                />
            </div>
            <div className="navbar-title">
                Cadastro de Materiais
            </div>
            <div className="navbar-content">
                <span>Olá, Kauã</span>
            </div>
        </nav>
    );
}