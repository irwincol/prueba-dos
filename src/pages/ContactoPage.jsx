import ContactForm from "../components/ContactForm"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const contactItems = [
  {
    id: "ubicacion",
    label: "UBICACIÓN",
    value: "Calle Urban Style 123\n28001 Madrid, España",
    icono: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: "telefono",
    label: "TELÉFONO",
    value: "+34 91 123 45 67",
    icono: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.58 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    id: "email",
    label: "EMAIL",
    value: "info@urbanthreads.com",
    icono: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    id: "horario",
    label: "HORARIO",
    value: "Lun - Vie: 9:00 - 18:00\nSáb: 10:00 - 14:00",
    icono: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

const ContactoPage = () => {
  return (
    <>
      <Navbar />
      <main className="contacto-page" id="contacto">
        <div className="container">
          <div className="contact-layout">
            {/* Columna de información */}
            <div className="contact-info">
              <ul className="contact-info__items">
                {contactItems.map((item) => (
                  <li key={item.id} className="contact-info__item">
                    <div className="contact-info__item-icon">
                      {item.icono}
                    </div>
                    <div>
                      <p className="contact-info__item-label">{item.label}</p>
                      {item.value.split("\n").map((line, i) => (
                        <p key={i} className="contact-info__item-value">{line}</p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formulario */}
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ContactoPage
