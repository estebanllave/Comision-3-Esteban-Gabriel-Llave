import { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPost,
  getAllPostByIdUser,
  getPostById,
  updatePost,
} from "../controllers/post.controller.js";
// protegiendo las rutas
import { authRequired } from "../middlewares/validateToken.js";

const postRoutes = Router();

// crear Post
postRoutes.post("/post", authRequired,createPost);
// todos los posteos
postRoutes.get("/post", getAllPost);
// buscar post por id
postRoutes.get("/post/:postId", authRequired, getPostById);
// modificar post
postRoutes.put("/post/:postId", authRequired,updatePost);
// eliminar post
postRoutes.delete("/post/:postId", authRequired,deletePost);
// buscar post por id del usuario
postRoutes.get("/posts/:postId",authRequired ,getAllPostByIdUser)

// exporto la ruta
export default postRoutes;
