import ProductCard from "../components/ProductCard"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const productos = [
  {
    id: "camiseta-urban",
    nombre: "Camiseta Básica Urban",
    descripcion: "Algodón 100% orgánico",
    precio: 29,
    icono: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
      </svg>
    ),
  },
  {
    id: "jeans-slim",
    nombre: "Jeans Slim Fit",
    descripcion: "Denim premium stretch",
    precio: 89,
    icono: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
      </svg>
    ),
  },
  {
    id: "sudadera-oversize",
    nombre: "Sudadera Oversize",
    descripcion: "Algodón French Terry",
    precio: 65,
    icono: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    id: "chaqueta-bomber",
    nombre: "Chaqueta Bomber",
    descripcion: "Nylon resistente al agua",
    precio: 129,
    icono: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    id: "gorra-snapback",
    nombre: "Gorra Snapback",
    descripcion: "Bordado premium",
    precio: 35,
    icono: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "zapatillas-urban",
    nombre: "Zapatillas Urban",
    descripcion: "Suela de goma antideslizante",
    precio: 110,
    icono: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

const ProductosPage = () => {
  return (
    <>
      <Navbar />
      <main className="productos-page" id="productos">
        <div className="container">
          <header className="section-header">
            <h1 className="section-header__title">Nuestra Colección</h1>
            <p className="section-header__subtitle">
              Descubre nuestra colección exclusiva de ropa urbana minimalista
            </p>
          </header>

          <div className="products-grid">
            {productos.map((producto) => (
              <ProductCard
                key={producto.id}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                precio={producto.precio}
                icono={producto.icono}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ProductosPage
