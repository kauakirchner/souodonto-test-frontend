import React from "react";
import "./button.css";

type ButtonType = "submit" | "button"

interface ButtonProps {
    color?: string;
    type?: ButtonType;
    text?: string;
    styleClasses?: string;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
}

export const Button = ({ onClick, color, type, text, styleClasses }: ButtonProps) => {
    const buttonColor = color === "error" ? "red" : "purple";
    const buttonType = type ? type : "button"
    const buttonClassName = styleClasses ? styleClasses : "";

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (typeof onClick === "function") {
            onClick(event);
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