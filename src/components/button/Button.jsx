import "./button.css";

export const Button = ({ onClick, type }) => {
    const buttonType = type === "error" ? "red" : "purple";
    return (
        <button className={`btn ${buttonType}`} onClick={onClick}>Adicionar</button>
    )
}