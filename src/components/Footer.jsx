import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        {/* Columna 1 - Marca */}
        <div>
          <p className="footer__brand-name">URBAN THREADS</p>
          <p className="footer__brand-text">
            Redefiniendo el estilo urbano con diseños minimalistas y calidad premium.
          </p>
        </div>

        {/* Columna 2 - Enlaces */}
        <div>
          <p className="footer__col-title">ENLACES</p>
          <ul className="footer__links">
            <li><Link to="/" className="footer__link">Inicio</Link></li>
            <li><Link to="/productos" className="footer__link">Productos</Link></li>
            <li><Link to="/contacto" className="footer__link">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3 - Ayuda */}
        <div>
          <p className="footer__col-title">AYUDA</p>
          <ul className="footer__links">
            <li><a href="#" className="footer__link">Guía de tallas</a></li>
            <li><a href="#" className="footer__link">Envíos</a></li>
            <li><a href="#" className="footer__link">Devoluciones</a></li>
            <li><a href="#" className="footer__link">FAQ</a></li>
          </ul>
        </div>

        {/* Columna 4 - Síguenos */}
        <div>
          <p className="footer__col-title">SÍGUENOS</p>
          <div className="footer__social-icons">
            {/* Twitter / X */}
            <a href="#" className="footer__social-icon" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            {/* Pinterest */}
            <a href="#" className="footer__social-icon" aria-label="Pinterest">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="16" x2="8" y2="16"></line>
                <line x1="8" y1="20" x2="16" y2="20"></line>
                <line x1="16" y1="16" x2="16" y2="16"></line>
                <path d="M12 2a10 10 0 0 0-3 19.54V17a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4.54A10 10 0 0 0 12 2z"></path>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="footer__social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2024 Urban Threads. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
