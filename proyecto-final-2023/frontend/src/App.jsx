import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./pages/Login";
import { Post } from "./pages/Post";
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/post" element={<Post/>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
