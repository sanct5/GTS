import { GameCard } from "./Components/gamescard/GameCard";
import NavBar from "./Components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./app.css"

function App() {
  // Use effects y peticiones para los filtros preestablecidos
  const [juegos, setJuegos] = useState([])
  const [juegosVotados, setJuegosVotados] = useState([])
  const [juegosDescargados, setDescargados] = useState([])
  const [juegosRecientes, setRecientes] = useState([])
  const [juegosDisponibles, setDisponibles] = useState([])
  const [juegosNombre, setJuegosNombre] = useState([])
  const [juegosDesarrollador, setJuegosDesarrollador] = useState([])

  //Peticiones fecht al server de express
  useEffect( () => {
      const getJuegos = () => {
          fetch(`http://localhost:3001/api/getallgames`)
          .then(res => res.json())
          .then(res => setJuegos(res))
      }
      getJuegos()
  },[])

  useEffect( () => {
    const getJuegosVotados = () => {
        fetch(`http://localhost:3001/api/getmejorvotados`)
        .then(res => res.json())
        .then(res => setJuegosVotados(res))
    }
    getJuegosVotados()
  },[])

  useEffect( () => {
    const getJuegosDescargados = () => {
        fetch(`http://localhost:3001/api/getmasdescargados`)
        .then(res => res.json())
        .then(res => setDescargados(res))
    }
    getJuegosDescargados()
  },[])

  useEffect( () => {
    const getJuegosRecientes = () => {
        fetch(`http://localhost:3001/api/getmasrecientes`)
        .then(res => res.json())
        .then(res => setRecientes(res))
    }
    getJuegosRecientes()
  },[])

  useEffect( () => {
    const getJuegosDisponibles = () => {
        fetch(`http://localhost:3001/api/getmasdisponibles`)
        .then(res => res.json())
        .then(res => setDisponibles(res))
    }
    getJuegosDisponibles()
  },[])

  useEffect( () => {
    const getJuegosNombre = () => {
        fetch(`http://localhost:3001/api/getpornombre`)
        .then(res => res.json())
        .then(res => setJuegosNombre(res))
    }
    getJuegosNombre()
  },[])

  useEffect( () => {
    const getJuegosDesarrollador = () => {
        fetch(`http://localhost:3001/api/getpordesarrollador`)
        .then(res => res.json())
        .then(res => setJuegosDesarrollador(res))
    }
    getJuegosDesarrollador()
  },[])


  //Html del componente
  return (
    <div>
      <NavBar/>
      <div className="grid-container">
        <Routes>
          <Route path="/" element={juegos.map((juego) => ( <GameCard key={juego._id} juego={juego} /> ))}/>
            <Route path="/mejorvotados" element={juegosVotados.map((juego) => ( <GameCard key={juego._id} juego={juego} /> ))}/>
            <Route path="/masdescargados" element={juegosDescargados.map((juego) => ( <GameCard key={juego._id} juego={juego} /> ))}/>
            <Route path="/masrecientes" element={juegosRecientes.map((juego) => ( <GameCard key={juego._id} juego={juego} /> ))}/>
            <Route path="/masdisponibles" element={juegosDisponibles.map((juego) => ( <GameCard key={juego._id} juego={juego} /> ))}/>
            <Route path="/filtrarnombre" element={juegosNombre.map((juego) => ( <GameCard key={juego._id} juego={juego} /> ))}/>
            <Route path="/filtrardesarrollador" element={juegosDesarrollador.map((juego) => ( <GameCard key={juego._id} juego={juego} /> ))}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;