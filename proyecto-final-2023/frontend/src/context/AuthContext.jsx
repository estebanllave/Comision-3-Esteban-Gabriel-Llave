
import {createContext,useContext,useState} from "react";
// importo la conexion a DB de register
import {registerReq,loginReq} from "../api/auth"

export const AuthContext = createContext()


// esto me va a permitir importar los que yo estoy mandando por el provider a los hijos
export const useAuth = () =>{
    const context = useContext(AuthContext)
    if(!context) throw new Error("Error en el contexto del usuario")
    return context;
}

export const AuthProvider = ({children}) =>{

    const [user,setUser] = useState(null)

    // booleano para la autenticacion
    const[isAuth,setIsAuth] = useState(false);

    // manejos de los estados de errores
    const [errors,setErrors] = useState([])

    // resitro del usuario
    const signup = async (user) =>{
        try {
            // hago la peticion a la DB
            const res = await registerReq(user)
            console.log(res.data);
            setUser(res.data)
            setIsAuth(true)
        } catch (error) {
            // console.log(error.response.data);
            setErrors(error.response.data)
        }
    }
    // login
    const signin = async(user) =>{
        try {
            const res = await loginReq(user)
            setUser(res.data);
            setIsAuth(true)
        } catch (error) {
            // console.log(error.response.data);
            setErrors(error.response.data)
        }
    }


    return(
        <AuthContext.Provider
        value={{
            signup,
            signin,
            isAuth,
            user,
            errors,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
