import { GameCard } from "./Components/gamescard/GameCard";
import NavBar from "./Components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import "./app.css"


function App() {
  return (
    <div>
      <NavBar/>
      <div className="grid-container">
      <Routes>
        <Route path="/" element={<GameCard></GameCard>}/>
        <Route path="/aboutus" element={<h1>Sobre nostros</h1>}/>
        <Route path="/mejorvotados" element={<h1>Filtrar Calificados</h1>}/>
        <Route path="/masdescargados" element={<h1>Filtrar Descargados</h1>}/>
        <Route path="/masrecientes" element={<h1>Filtrar Recientes</h1>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
