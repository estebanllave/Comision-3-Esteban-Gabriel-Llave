import { createContext, useContext, useEffect, useState } from "react";
// importo la conexion a DB de register
import { registerReq, loginReq, verifyToken } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

// esto me va a permitir importar los que yo estoy mandando por el provider a los hijos
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Error en el contexto del usuario");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // booleano para la autenticacion
  const [isAuth, setIsAuth] = useState(false);

  // manejos de los estados de errores
  const [errors, setErrors] = useState([]);

  // resitro del usuario
  const signup = async (user) => {
    try {
      // hago la peticion a la DB
      const res = await registerReq(user);
      setUser(res.data);
      setIsAuth(true);
    } catch (error) {
      // console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  // login
  const signin = async (user) => {
    try {
      const res = await loginReq(user);
      setIsAuth(true);
      setUser(res.data);
    } catch (error) {
      // console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  // efecto para manejar el tiempo de los errores
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  // manejo de las cookies
  useEffect(() => {
    async function verifyLogin() {
      const token = Cookies.get("token");
      if (token) {
        try {
          const res = await verifyToken(token);
          if (res.data) {
            setIsAuth(true);
            setUser(res.data);
          } else {
            console.log("hola desde el else de verify token");
            setIsAuth(false);
          }
        } catch (error) {
          setIsAuth(false);
          setUser(null);
        }
      }
    }

    verifyLogin();
  }, []);




  // salir logout
  const signout = () => {
    Cookies.remove("token");
    setIsAuth(false);
    setUser(null);
  };

  // para solucionar el problema de autenticacion
  // const checkAuthentication = async () => {
  //   const cookie = Cookies.get("token");
  //   if (cookie) {
  //     try {
  //       const res = await verifyToken(cookie.token);
  //       if (res.data) {
  //         setIsAuth(true);
  //         setUser(res.data);
  //       } else {
  //         setIsAuth(false);
  //         setUser(null);
  //       }
  //     } catch (error) {
  //       setIsAuth(false);
  //       setUser(null);
  //     }
  //   } else {
  //     setIsAuth(false);
  //     setUser(null);
  //   }
  // };

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        signout,
        verifyToken,
        // checkAuthentication,
        isAuth,
        user,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
