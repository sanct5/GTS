import { GameCard } from "./Components/gamescard/GameCard";
import NavBar from "./Components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./app.css"

function App() {

  // -------------- Use states para los filtros preestablecidos -----------------//
  const [juegos, setJuegos] = useState([])
  const [juegosVotados, setJuegosVotados] = useState([])
  const [juegosDescargados, setDescargados] = useState([])
  const [juegosRecientes, setRecientes] = useState([])
  const [juegosDisponibles, setDisponibles] = useState([])

    // -------------- Use states para los filtros -----------------//

  const [juegosBusqueda, setJuegosBusqueda] = useState([])
  console.log(juegosBusqueda)

  //------------------------- Peticiones fecht al server de express para filtos preestablecidos -------------------//
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

  //---------------------------------- Html del componente -------------------------------//
  return (
    <div>
      <NavBar setJuegosBusqueda={setJuegosBusqueda} />
      <div className="grid-container">
      <Routes>
          {juegosBusqueda.length > 0 ? (<Route path="/" element={juegosBusqueda.map((juego) => (<GameCard key={juego._id} juego={juego} />))}/>)
          : (<Route path="/" element={juegos.map((juego) => (<GameCard key={juego._id} juego={juego} />))}/>)}

          {juegosBusqueda.length > 0 ? (<Route path="/mejorvotados" element={juegosBusqueda.map((juego) => (<GameCard key={juego._id} juego={juego} />))}/>)
          : (<Route path="/mejorvotados" element={juegosVotados.map((juego) => (<GameCard key={juego._id} juego={juego} />))}/>)}

          {juegosBusqueda.length > 0 ? (<Route path="/masdescargados" element={juegosBusqueda.map((juego) => (<GameCard key={juego._id} juego={juego} />))}/>)
          : (<Route path="/masdescargados" element={juegosDescargados.map((juego) => ( <GameCard key={juego._id} juego={juego} />))}/>)}

          {juegosBusqueda.length > 0 ? (<Route path="/masdisponibles" element={juegosBusqueda.map((juego) => (<GameCard key={juego._id} juego={juego} />))}/>)
          : (<Route path="/masdisponibles" element={juegosDisponibles.map((juego) => (<GameCard key={juego._id} juego={juego} />))}/>)}

          {juegosBusqueda.length > 0 ? (<Route path="/masrecientes" element={juegosBusqueda.map((juego) => (<GameCard key={juego._id} juego={juego} />))}/>)
          : (<Route path="/masrecientes" element={juegosRecientes.map((juego) => (<GameCard key={juego._id} juego={juego} />))}/>)}
          
        </Routes>
      </div>
    </div>
  );
}

export default App;