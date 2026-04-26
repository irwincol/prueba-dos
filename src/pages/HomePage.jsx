import { Link } from "react-router-dom"
import FeatureCard from "../components/FeatureCard"

const features = [
  {
    id: "diseno-unico",
    titulo: "DISEÑO ÚNICO",
    descripcion: "Piezas exclusivas con estética urbana y minimalista",
    icono: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "calidad-premium",
    titulo: "CALIDAD PREMIUM",
    descripcion: "Materiales de alta calidad para máxima durabilidad",
    icono: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    id: "envio-rapido",
    titulo: "ENVÍO RÁPIDO",
    descripcion: "Entrega express en 24-48 horas",
    icono: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
]

const HomePage = () => {
  return (
    <main id="inicio">
      {/* Hero */}
      <section className="hero" aria-label="Sección principal">
        <div className="hero__bg" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="hero__title">
            ESTILO URBANO<br />
            <span>REDEFINIDO</span>
          </h1>
          <p className="hero__description">
            Descubre nuestra colección exclusiva de ropa urbana con estilo y calidad premium.
          </p>
          <div className="hero__actions">
            <Link to="/productos" className="btn-primary" id="cta-explorar">
              Explorar Colección
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" aria-label="Características">
        <div className="features__inner">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icono={feature.icono}
              titulo={feature.titulo}
              descripcion={feature.descripcion}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage
