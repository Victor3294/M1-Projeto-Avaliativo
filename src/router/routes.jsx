import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import Login from "../pages/Login"
import CadastroUsuario from "../pages/CadastroUsuario"
import Dashboard from "../pages/Dashboard"
import CadastroLocalDeColeta from "../pages/CadastroLocalDeColeta"
import ListagemLocalDeColeta from "../pages/ListagemLocalDeColeta"

const routes = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/cadastroUsuario",
        element: <CadastroUsuario />
    },
    {
        path : "/",
        element: <App />,
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