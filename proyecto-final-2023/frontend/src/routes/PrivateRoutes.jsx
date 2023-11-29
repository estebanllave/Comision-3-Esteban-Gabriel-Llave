import {useAuth} from"../context/AuthContext"
import {Navigate, Outlet} from "react-router-dom"


export const PrivateRoutes = () => {
    const {user,isAuth} = useAuth()

    // si no esta autorizado lo manda al login
    if(!isAuth) return <Navigate to="/login"/>
    // caso contrario lo deja navegar a la ruta que quiere ingresar
    return <Outlet/>;
}





