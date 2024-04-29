import {Navigate, createBrowserRouter} from "react-router-dom"
import App from "../App"
import Login from "../pages/Login"
import CadastroUsuario from "../pages/CadastroUsuario"
import Dashboard from "../pages/Dashboard"
import CadastroLocalDeColeta from "../pages/CadastroLocalDeColeta"
import ListagemLocalDeColeta from "../pages/ListagemLocalDeColeta"

let isAutenticado = JSON.parse(localStorage.getItem("isAutenticado")) || false

const PrivateRoute = ({children}) => {
    return isAutenticado ? children : <Navigate to="/login"/>
}


const routes = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/usuario/cadastro",
        element: <CadastroUsuario />
    },
    {
        path : "/",
        element: (
            <PrivateRoute>
                <App/>
            </PrivateRoute>
        ),
        children : [
            {
                path : "/",
                element : <Dashboard />
            },
            {
                path : "/cadastroLocalDeColeta",
                element: <CadastroLocalDeColeta />
            },
            {
                path : "/listagemLocalDeColeta",
                element : <ListagemLocalDeColeta />
            }
        ]
    }
])

export default routes