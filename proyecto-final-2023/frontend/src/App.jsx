import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./pages/Login";
import { Post } from "./pages/Post";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
// import NavbarPublic from "./components/NavbarPublic";
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          
          {/* rutas publicas */}
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* rutas privadas */}
          <Route element={<PrivateRoutes/>}>
            <Route path="/post" element={<Post />} />
            <Route path="/profile" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
