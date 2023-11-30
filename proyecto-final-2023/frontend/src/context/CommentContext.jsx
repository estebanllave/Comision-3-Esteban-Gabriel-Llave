
import { createContext, useContext, useState } from "react";
import {
  createCommentReq,
  deleteCommentReq,
  getCommentByIdReq,
  getAllCommentReq,
  updateCommentReq,
} from "../api/commentAxios";

const CommentContext = createContext();

export const useComment = () => {
  const context = useContext(CommentContext);
  console.log(context);
  if (!context) throw new Error("Error en el contexto de comentarios");
  return context;
};

export const CommentProvider = ({ children }) => {
  const [comment, setComment] = useState([]);

  // Crear Comentario
  // const createComment = async (comment) => {
  //   const res = await createCommentReq(comment);
  //   // Actualizar el estado con el nuevo comentario
  //   setComment(...comment, res.data);
  // };
  const createComment = async (commentData) => {
  
  
    try {
        const res = await createCommentReq(commentData);
        // Actualizar el estado con el nuevo comentario
        setComment((prevComments) => [...prevComments, res.data]);
      } catch (error) {
        console.log(error);
      }
    };

  // buscar
  const getAllComment = async () => {
    const res = await getAllCommentReq();
    // console.log(res);
    try {
      setComment(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // eliminar
  const deleteComment = async (id) => {
    try {
      const res = await deleteCommentReq(id);
      console.log(res);
      if (res.status === 200)
        setComment(comment.filter((comment) => comment._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // buscapor id
  const getCommentById = async (id) => {
    try {
      const res = await getCommentByIdReq(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  // actualizar
  const updateComment = async (id, post) => {
    try {
      const res = await updateCommentReq(id, post);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommentContext.Provider
      value={{
        comment,
        createComment,
        getAllComment,
        getCommentById,
        deleteComment,
        updateComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
























// const CommentContext = createContext();

// export const useComment = () => {
//   const context = useContext(CommentContext);
//   if (!context) throw new Error("Error en el contexto de comentarios");
 
//   return context;
// };

// export const CommentProvider = ({ children }) => {
//   const [comment, setComment] = useState([]);

//   // Crear Comentario
//   const createComment = async (comment) => {
//     const res = await createCommentReq(comment);
//     // Actualizar el estado con el nuevo comentario
//     setComment([...comment, res.data]);
//   };

//   // buscar
//   const getAllComment = async () => {
//     const res = await getAllCommentReq();
//     // console.log(res);
//     try {
//       setComment(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // eliminar
//   const deleteComment = async (id) => {
//     try {
//       const res = await deleteCommentReq(id);
//       console.log(res);
//       if (res.status === 200)
//         setComment(comment.filter((comment) => comment._id !== id));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // buscapor id
//   const getCommentById = async (id) => {
//     try {
//       const res = await getCommentByIdReq(id);
//       return res.data;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // actualizar
//   const updateComment = async (id, post) => {
//     try {
//       const res = await updateCommentReq(id, post);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <CommentContext.Provider
//       value={{
//         comment,
//         createComment,
//         getAllComment,
//         getCommentById,
//         deleteComment,
//         updateComment,
//       }}
//     >
//       {children}
//     </CommentContext.Provider>
//   );
// };

