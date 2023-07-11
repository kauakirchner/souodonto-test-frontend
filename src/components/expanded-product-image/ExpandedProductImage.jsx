import "./expandedimage.css";

export const ExpandedProductImage = ({ image, showImage, onClick }) => {
    return (
        <>
            { showImage && (
                <div className="img-container" onClick={onClick}>
                    <img 
                        src={image} 
                        alt="" 
                        className="expanded-image"
                    />
                </div>
            )}
        </>
    )
}