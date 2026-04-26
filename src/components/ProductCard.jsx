const ProductCard = ({ nombre, descripcion, precio, icono }) => {
  const handleAnadir = () => {
    alert(`"${nombre}" añadido al carrito`)
  }

  return (
    <article className="product-card">
      <div className="product-card__image">
        {icono}
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{nombre}</h3>
        <p className="product-card__desc">{descripcion}</p>
        <div className="product-card__footer">
          <span className="product-card__price">€{precio}</span>
          <button
            className="btn-add"
            onClick={handleAnadir}
            aria-label={`Añadir ${nombre} al carrito`}
          >
            AÑADIR
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
