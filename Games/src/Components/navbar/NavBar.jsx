import React from 'react'
import { GiConsoleController } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import "./NavBar.css"

function NavBar() {
    return (
        <div>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand"><GiConsoleController id="icon-logo"/>Games</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="/aboutus">About Us</a>
                  </li>
                  <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Filtros</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/mejorcalificados">Mejor votados</a></li>
                  <li><a class="dropdown-item" href="/masdescargados">Más descargados</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="/masrecientes">Más recientes</a></li>
                </ul>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link disabled">Los videojuegos pueden ser una fuente de inspiración y motivación para superar desafíos tanto dentro como fuera de la pantalla.</a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                  <button class="btn btn-outline-success" type="submit"><BsSearch id="icon-Search"/></button>
                </form>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default NavBar