import React from 'react'

export const GameCard = ({juego}) => {

    const releaseYear = new Date(juego.release_date).getFullYear();

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={juego.header_image} alt='Header del juego'></img>
            <div className="card-body">
                <h5 className="card-title">{juego.name}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Año:</strong> {releaseYear}</li>
                    <li className="list-group-item"><strong>Desarrollador:</strong> {juego.developer}</li>
                    <li className="list-group-item"><strong>Votos positivos:</strong> {juego.positive}</li>
                    <li className="list-group-item"><p className="card-text">{juego.short_description}</p></li>
                </ul>
                {juego.website && (<a style={{ marginLeft: "25%" }} href={juego.website} className="btn btn-primary">Pagina oficial</a>)}
            </div>
        </div>
    );
};