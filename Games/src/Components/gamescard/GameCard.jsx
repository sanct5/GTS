import React from 'react'

export const GameCard = () => {
    return (
        <div class="card" style={{width: "18rem"}}>
            <img src="https://cdn.akamai.steamstatic.com/steam/apps/1000770/header.jpg?t=1667381669" class="card-img-top" alt="Imgagen del juego"></img>
            <div class="card-body">
                <h5 class="card-title">Urban Tale</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Fecha de salida</li>
                    <li class="list-group-item">Descargas</li>
                    <li class="list-group-item">Puntos positivos</li>
                    <li class="list-group-item"><p class="card-text">Urban Tale is a realistic, vibrant and unique RPG that will allow you to fulfil your dreams, and pursue your most wanted goals in life. You start from scratch, having nothing in the city where you can meet a lot of people, that can help you throughout your adventure. Your goal is to succeed in life.</p></li>
                </ul>
                <a style={{marginLeft:"25%"}} href="https://www.urban-tale.com" class="btn btn-primary">Pagina oficial</a>
            </div>
        </div>
    )
}