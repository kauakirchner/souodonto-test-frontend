import Logo from "../../../assets/logo.svg"
import "./navbar.css";

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
            <div className="navbar-content">
                <div className="navbar-title">
                    Cadastro de Materiais
                </div>
                <span>Olá :)</span>
            </div>
      </nav>
      
    )
}