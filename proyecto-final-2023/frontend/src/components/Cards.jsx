import { useState } from "react";
import { CommentForm } from "../components/CommentForm";
import { useAuth } from "../context/AuthContext";
import { useComment } from "../context/CommentContext";

export const Card = ({ post }) => {
  const { user } = useAuth();
  const { deleteComment, updateComment } = useComment();
  const [comments, setComments] = useState(post.comments);

  const handleDeleteComment = async (commentId) => {
    // Lógica para eliminar el comentario
    await deleteComment(commentId);

    // Actualizar el estado local después de la eliminación
    const updatedComments = comments.filter(
      (comment) => comment._id !== commentId
    );
    setComments(updatedComments);
  };

  const handleEditComment = async (commentId, updatedDescription) => {
    // Lógica para editar el comentario
    await updateComment(commentId, updatedDescription);

    // Actualizar el estado local después de la edición
    const editComments = comments.map((comment) =>
      comment._id === commentId
        ? { ...comment, description: updatedDescription }
        : comment
    );
    setComments(editComments);
  };

  return (
    <div className="py-10 sm:py-16">
      {/* ... (resto de tu código) */}
      <div className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 ">
          <div className="mx-auto mt-8 grid max-w-1xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
          <div className="mx-auto mt-8 grid max-w-1xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex flex-col items-start max-w-sm bg-white bg-opacity-80 rounded-md overflow-hidden shadow-lg">
              {/* ... (resto de tu código) */}
              <div className="group relative ">
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-60 object-cover rounded-md"
                />
              </div>

              <div className="relative mt-3">
                <p className="text-sm leading-6 text-gray-700 px-2">
                  {/* autor:{} */}
                  Titulo <strong>{post.name}: </strong>
                  <br></br>
                  {post.description}
                </p>
              </div>
              <div className="mt-3 flex items-center gap-x-2">
                <div className="text-xs leading-5">
                  <p className="font-semibold text-gray-900">Comentarios:</p>
                  {/* Renderizar comentarios aquí */}
                  {comments.map((comment, i) => (
                    <div key={i} className="mb-3">
                      {comment && comment.autor && (
                        <>
                          <p className="text-sm font-semibold text-gray-900">
                            Autor: {comment.autor}
                          </p>
                          <p className="text-sm text-gray-700">
                            {comment.description}
                          </p>
                          {user.id === comment.user && (
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleDeleteComment(comment._id)}
                                className="bg-red-400 text-white px-2 py-1 rounded-md text-sm" // Agregado: text-sm para reducir el tamaño del texto
                              >
                                Eliminar
                              </button>
                              <button
                                onClick={() => {
                                  const updatedDescription = prompt(
                                    "Editar comentario:",
                                    comment.description
                                  );
                                  if (updatedDescription !== null) {
                                    handleEditComment(
                                      comment._id,
                                      updatedDescription
                                    );
                                  }
                                }}
                                className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm" // Agregado: text-sm para reducir el tamaño del texto
                              >
                                Editar
                              </button>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* Formulario de Comentario */}
              <CommentForm postId={post} />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
