import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useComment } from "../context/CommentContext";
import { usePosts } from "../context/PostContext";

export const CommentForm = () => {
  const { user } = useAuth();
  const { postId } = usePosts;
  const { createComment } = useComment();
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    // Verificar que el usuario esté autenticado
    if (!user) {
      // Puedes mostrar un mensaje de error o redirigir a la página de inicio de sesión
      console.log("Usuario no autenticado");
      return;
    }

    // Crear el comentario
    await createComment({
      postId,
      userId: user.id,
      text: commentText,
    });

    // Limpiar el campo de comentario después de enviar
    setCommentText("");
  };

  return user? (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}
    >
      <form onSubmit={handleSubmit}>
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
        <button
          type="submit"
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
      </form>
    </div>
  ): null
};
