
import { Footer } from "../components/Footer";
import NavbarPrivate from "../components/NavbarPrivate"
// import NavbarPublic from "../components/NavbarPublic";
import { useAuth } from "../context/AuthContext";

export const Profile = () => {
  const { user } = useAuth();
console.log(user);
if (!user)
return (
  <>
    <NavbarPrivate/>
    <div className="flex items-center justify-center">
      <h1 className="text-4xl font-bold text-red-500">
        cargando...
      </h1>
    </div>
    <Footer />
  </>
);

  return (
    <>
      <NavbarPrivate />
      <div className="container mx-auto mt-8 p-8 bg-white shadow-md max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Perfil de Usuario</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Nombre:</p>
            <p className="font-bold">{user.usename}</p>
          </div>
          <div>
            <p className="text-gray-600">Correo Electrónico:</p>
            <p className="font-bold">{user.email}</p>
          </div>
          {/* Agrega más campos según sea necesario */}
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </>
  );
};


// export const Profile = () => {
//     const { user } = useAuth();
//     return (
//       <>
//         <NavbarPrivate/>
//         {/* <NavbarPublic/> */}
//         <div>Profile</div>
//         {JSON.stringify(user, null, 3)}
//         <Footer/>
//       </>
//     );
  // };
