import React from 'react'
import { GiConsoleController } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import "./NavBar.css"

function NavBar() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand"><GiConsoleController id="icon-logo"/>Steam Games-DB</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
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
                  <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                  <button className="btn btn-outline-success" type="submit"><BsSearch id="icon-Search"/></button>
                </form>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default NavBar