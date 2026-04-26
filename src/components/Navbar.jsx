import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const toggleMenu = () => setMenuAbierto((prev) => !prev)
  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__logo" onClick={cerrarMenu}>
          URBAN THREADS
        </NavLink>

        {/* Botón hamburguesa — visible solo en móvil */}
        <button
          className={`navbar__hamburger ${menuAbierto ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
          id="hamburger-btn"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Links — desktop siempre visibles, móvil condicional */}
        <ul className={`navbar__links ${menuAbierto ? "navbar__links--open" : ""}`}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
              onClick={cerrarMenu}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/productos"
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
              onClick={cerrarMenu}
            >
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
              onClick={cerrarMenu}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
