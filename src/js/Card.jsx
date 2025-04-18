import React from "react";

export const Card = ({title, description, button, photo}) => {
    return (

        
            <div className="cardtattoo" style={{display: 'inline-block', width: '250px', }}>
                <img src={photo} className="img-fluid " alt="imagen no disponible" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">{button}</a>
                </div>
            </div>
        
    )
}