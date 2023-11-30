import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./pages/Login";
import { Post } from "./pages/Post";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { Home } from "./pages/Home";
import { NewPost } from "./pages/NewPost";
import { Profile } from "./pages/Profile";
import { PostProvider } from "./context/PostContext";
import { UpdatePost } from "./pages/UpdatePost";
import { CommentProvider } from "./context/CommentContext";
import { HomePublic } from "./pages/HomePublic";

// import NavbarPublic from "./components/NavbarPublic";
const App = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <CommentProvider>
        <BrowserRouter>
          <Routes>
            {/* rutas publicas */}
            <Route path="/home" element={<HomePublic/>} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* rutas privadas */}
            {/* <Route element={<PrivateRoutes />}> */}
              <Route path="/post" element={<Post />} />
              <Route path="/add-post" element={<NewPost />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/postupdate/:id" element={<UpdatePost/>}/>
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
        </CommentProvider>
      </PostProvider>
    </AuthProvider>
  );
};

export default App;
