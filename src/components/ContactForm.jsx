import { useState } from "react"

const initialFormState = {
  nombre: "",
  apellidos: "",
  email: "",
  asunto: "",
  mensaje: "",
}

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormState)
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Capturar y mostrar por consola
    console.log("Datos del formulario capturados:", formData)
    
    // Almacenar en localStorage
    const savedMessages = JSON.parse(localStorage.getItem("contact_messages") || "[]")
    savedMessages.push({ ...formData, date: new Date().toISOString() })
    localStorage.setItem("contact_messages", JSON.stringify(savedMessages))
    
    setEnviado(true)
    setFormData(initialFormState)
    setTimeout(() => setEnviado(false), 5000)
  }

  return (
    <div className="contact-form-wrapper">
      <div className="form-alert form-alert--demo">
        <strong>Demo:</strong> Este es un formulario de demostración. Los mensajes no se enviarán realmente.
      </div>

      {enviado && (
        <div className="form-alert form-alert--success" role="alert">
          ✓ Mensaje enviado correctamente.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate id="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="nombre">NOMBRE</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              className="form-input"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="apellidos">APELLIDOS</label>
            <input
              id="apellidos"
              name="apellidos"
              type="text"
              className="form-input"
              value={formData.apellidos}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">EMAIL</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="asunto">ASUNTO</label>
          <select
            id="asunto"
            name="asunto"
            className="form-input form-select"
            value={formData.asunto}
            onChange={handleChange}
          >
            <option value="">Selecciona un asunto</option>
            <option value="pedido">Información sobre pedido</option>
            <option value="devolucion">Devolución</option>
            <option value="talla">Consulta de talla</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="mensaje">MENSAJE</label>
          <textarea
            id="mensaje"
            name="mensaje"
            className="form-textarea"
            value={formData.mensaje}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn-submit" id="submit-btn">
          ENVIAR MENSAJE
        </button>
      </form>
    </div>
  )
}

export default ContactForm
