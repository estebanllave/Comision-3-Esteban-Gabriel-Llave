import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useComment } from "../context/CommentContext";
import { useNavigate } from "react-router-dom";

export const CommentForm = ({ postId, onAddComment }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { createComment, updateComment } = useComment();
  const [commentText, setCommentText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar que el usuario esté autenticado
    if (!user) {
      console.log("Usuario no autenticado");

      return;
    }

    if (commentText.length < 5) {
      console.log("La descripción debe tener al menos 5 caracteres");
      return;
    }

    navigate("/home");
    // Crear el comentario
    const newComment = await createComment({
      autor: user.usename,
      post: postId._id,
      user: user.id,
      description: commentText,
    });
    // console.log(user);
    // Limpia el campo de comentario después de enviar

    setCommentText("");

      console.log(newComment);
    onAddComment(newComment);

    navigate("/");
  };



  return user ? (
    <>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "8px",
          width: "270px",
        }}
      >
        <form>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Escribe tu comentario, con 5 caracteres como minimo"
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "8px",
              borderRadius: "4px",
              border: "1px solid #ddd",
            }}
          />
        </form>
      </div>
      <div>
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
    </div>
  </>
  ) : null;
};

