import App from '../App'
import HomePage from '../pages/HomePage'
import ProductosPage from '../pages/ProductosPage'
import ContactoPage from '../pages/ContactoPage'

export let routerApp = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/productos",
                element: <ProductosPage />
            },
            {
                path: "/contacto",
                element: <ContactoPage />
            }
        ]
    }
]
