import { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPost,
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

// exporto la ruta
export default postRoutes;
