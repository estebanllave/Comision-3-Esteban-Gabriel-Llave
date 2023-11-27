import Comment from "../models/comment.models.js"
import Post from "../models/post.models.js"


// crear comentario

export const createComment = async (req, res) => {
    const { post, description, publico } = req.body;

    try {
        const newComment = new Comment({
            post: post,
            user: req.user.id,
            description: description,
            publico: publico,
        });

        await newComment.save();

        if (post) {
            console.log(post);
            try {
                const comentario = await Post.findById(post);
                comentario.comments.push(newComment.id); // Agrega el nuevo comentario al arreglo de comentarios
                await comentario.save(); // Guardar el documento modificado
                res.status(201).json({ message: "Comentario enviado con éxito" });
            } catch (error) {
                res.status(500).json({ message: "Error al enviar Comentario", error });
            }
        } else {
            res.status(201).json(newComment); // Solo enviar la respuesta si no hay un post asociado
        }

    } catch (error) {
        res.status(500).json({ message: "Error al crear comentario", error });
    }
};


// listar comentario
export const listComments = async (req,res) =>{
    const comments = await Comment.find();
    res.json(comments);
}

// mostrar un comentario por id
export const getCommentById = async (req,res) =>{
    const {commentId} = req.params;
    try {
        const comment = await Comment.findById(commentId);
        res.status(200).json(comment);
    } catch (error) {
        return res.json({ message: "Error al buscar el comentario por el ID",error });
    }
}

// modificar comentario
export const updateComment = async (req,res) =>{
    const {commentId} = req.params;
    const comment = req.body;
    try {
        const updatedComment = await Comment.findByIdAndUpdate(commentId,comment,{
            new: true,
        });
        res.status(200).json(updatedComment)
    } catch (error) {
        return res
      .status(404)
      .json({ message: "No se pudo actualizar el comentario"});
        
    }
}
// eliminar comentario
export const deleteComment = async (req,res) =>{
    const {commentId} = req.params;
    try {
        const deleteComment = await Comment.findByIdAndDelete(commentId)
        res.status(200).json({message: "Comentario eliminado con exito"})
    } catch (error) {
        return res
      .status(404)
      .json({ message: "No se pudo eliminar el comentario"});
    }
}