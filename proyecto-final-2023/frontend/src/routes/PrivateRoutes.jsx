// import {useAuth} from"../context/AuthContext"
// import {Navigate, Outlet} from "react-router-dom"


// export const PrivateRoutes = () => {
//     const {isAuth} = useAuth()
//     console.log(isAuth);
//     // si no esta autorizado lo manda al login
//     if(!isAuth) return <Navigate to="/login"/>
    
//     // caso contrario lo deja navegar a la ruta que quiere ingresar
//     return(
        
//         <Outlet/>
//     ) 
    
// }


import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const PrivateRoutes = () => {
  const { isAuth, verifyToken } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      // Realiza la lógica asincrónica para verificar la autenticación
      await verifyToken();
      setLoading(false); // Marca la carga como completa
    };

    checkAuth();
  }, [verifyToken]);

  // Muestra un indicador de carga mientras se verifica la autenticación
  if (loading) {
    return <div>      <>
    <div className="flex items-center justify-center">
      <h3 className="text-4xl font-bold text-red-500">
      <div>Cargando...</div>
      </h3>
    </div>
  </></div>;
  }

  // Si isAuth es false, redirige al componente Navigate para ir a la página de inicio de sesión
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  // Si isAuth es true, renderiza el contenido protegido
  return <Outlet />;
};







