import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useComment } from "../context/CommentContext";

export const CommentForm = ({postId}) => {
  
  const { user } = useAuth();
 
  const { createComment } = useComment();
  const [commentText, setCommentText] = useState("");



  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Verificar que el usuario esté autenticado
    if (!user) {
      console.log("Usuario no autenticado");
      setComment(false)
      return;
    }

    // Crear el comentario
    await createComment({
      post: postId._id,
      user: user.id,
      description: commentText,
    });
    // Limpia el campo de comentario después de enviar
    setCommentText("");

  };

  return user? (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}
    >
      <form >
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Escribe tu comentario..."
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "8px",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        />
      </form>
      <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 15px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Comentar
        </button>
    </div>
  ): null
};
