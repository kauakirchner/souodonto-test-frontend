import "./button.css";

export const Button = ({ onClick, color, type, text, styleClasses }) => {
    const buttonColor = color === "error" ? "red" : "purple";
    const buttonType = type ? type : "button"
    const buttonClassName = styleClasses ? styleClasses : "";

    const handleClick = () => {
        if (typeof onClick === "function") {
            onClick();
        }
    }
    return (
        <button 
            className={`btn ${buttonColor} ${buttonClassName}`} 
            type={buttonType}  
            onClick={handleClick}
        >
            { text }
        </button>
    )
}