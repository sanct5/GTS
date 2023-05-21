import React from 'react'
import { useState } from "react";
import { GiConsoleController } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./NavBar.css"

function NavBar({ setJuegosBusqueda }) {
  // Use state que almacena los parametros de busqueda 
  const [search, setSearch] = useState({
    tipo:"",
    busqueda:"",
  });
  
  //--------- HandleChange para recuperar los parametros de busqueda ----------------//
  const handleChange = e => {
      setSearch({
          ...search,
          [e.target.name]: e.target.value
      })
  }

  //------------------ HandleSubmit que utiliza los parametros de busqueda ----------------//
  const handleSubmit = () => {
    // Realiza la búsqueda según la opción seleccionada en el campo de búsqueda
    if(search.tipo.trim() === "" || search.busqueda === ""){
      toast.error("Debe seleccionar un filtro y escribir en el cuadro de busqueda")
      return
      }else{
        if (search.tipo === 'name') {
          // Realiza la búsqueda por nombre
          fetch(`http://localhost:3001/api/getpornombre/${search.busqueda}`)
            .then(res => res.json())
            .then(data => {setJuegosBusqueda(data); // Asignar datos a juegosNombre
            })
            .catch(error => console.error('Error:', error));
        } else {
          // Realiza la búsqueda por desarrollador
          fetch(`http://localhost:3001/api/getpordesarrollador/${search.busqueda}`)
            .then(res => res.json())
            .then(data => {
              setJuegosBusqueda(data); // Asignar datos a juegosDesarrollador
            })
            .catch(error => console.error('Error:', error));
          } 
        }
      }

    //Html del componente
    return (
        <div>
          <ToastContainer />
          <nav className="navbar navbar-expand-lg navbar-custom bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand"><GiConsoleController id="icon-logo"/>Steam Games-DB</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Catálogo</a>
                  </li>
                  <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Filtros</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/mejorvotados">Mejor votados</a></li>
                  <li><a className="dropdown-item" href="/masdescargados">Más descargados</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="/masrecientes">Más recientes</a></li>
                  <li><a className="dropdown-item" href="/masdisponibles">Disponibles en todos los OS</a></li>
                </ul>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link disabled">Los videojuegos pueden ser una fuente de inspiración y motivación para superar desafíos tanto dentro como fuera de la pantalla.</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" style={{width:"330px"}}type="search" placeholder="Buscar" aria-label="Search" value={search.busqueda} name="busqueda" onChange={handleChange}/>
                  <select className="form-select" style={{width:"170px"}} value={search.tipo} name='tipo' onChange={handleChange}> 
                    <option value="" defaultValue disabled>Selecciona un filtro</option>
                    <option value="name">Nombre</option>
                    <option value="developer">Desarrollador</option>
                  </select>
                </form>
                <button className="btn btn-outline-success" onClick={() => handleSubmit()}>
                    <BsSearch id="icon-Search" />
                  </button>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default NavBar