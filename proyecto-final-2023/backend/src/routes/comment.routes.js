import { Router } from "express";
import {
  createComment,
  deleteComment,
  getCommentById,
  listComments,
  updateComment,
} from "../controllers/comment.controller.js";
// para poder manejar estas rutas 
import { authRequired } from "../middlewares/validateToken.js";


const commentRoutes = Router();
// crear comentario
commentRoutes.post("/comment",authRequired,createComment);
// lista de todos los comentarios
commentRoutes.get("/comment",listComments);
// buscar comentario por id
commentRoutes.get("/comment/:commentId", authRequired, getCommentById);
// modificar comentario
commentRoutes.put("/comment/:commentId", authRequired, updateComment);
// eliminar comentario
commentRoutes.delete("/comment/:commentId", authRequired, deleteComment);

export default commentRoutes;
