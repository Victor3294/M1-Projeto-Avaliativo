import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from "./router/routes.jsx"
import {RouterProvider} from "react-router-dom"
import './index.css'
import {UsuariosContextProvider} from "./context/UsuariosContext.jsx"
import { LocalDeColetaContextProvider } from './context/LocalDeColetaContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UsuariosContextProvider>
    <LocalDeColetaContextProvider>
      <RouterProvider router={routes} />
    </LocalDeColetaContextProvider>
  </UsuariosContextProvider>
    
)
