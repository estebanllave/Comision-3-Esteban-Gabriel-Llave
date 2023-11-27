
import Post from "../models/post.models.js"
import Comment from "../models/comment.models.js"

// crear Post
export const createPost =async (req,res) =>{
    const  {name,image,description} = req.body
    try {
        const newPost = new Post({
            name,
            image,
            description,
            user: req.user.id
            });
        const postSaved =  await newPost.save();
        res.status(201).json(postSaved);
    } catch (error) {
        res.status(500).json({ message: "Error al crear Posteo ", error });

    }
}
// listar Posts
export const getAllPost =async (req,res) =>{
    try {
        const posts = await Post.find().populate(
           "comments",

        );
        res.json(posts) 
    } catch (error) {
        return res.json({ message: "Error al buscar el Posteos",error });

    }
}
// buscar Post por Id
export const getPostById =async (req,res) =>{
    const {postId} = req.params;
    
    try {
        // const comments = Comment.find({postId})
        // console.log([comments]);
        const post = await Post.findById(postId);
        res.status(200).json(post)
    } catch (error) {
        
    }
}
// modificar Post

export const updatePost =async (req,res) =>{  
      const {postId} = req.params;
const post = req.body;
try {
    const updatedPost = await Post.findByIdAndUpdate(postId,post,{
        new: true,
    });
    res.status(200).json(updatedPost);
} catch (error) {
    return res
  .status(404)
  .json({ message: "No se pudo actualizar el Posteo"});
    
}}
// eliminar Post
export const deletePost =async (req,res) =>{
    const {postId} = req.params;
    try {
        const deletePost = await Post.findByIdAndDelete(postId)
        res.status(200).json({message: "Post eliminado con exito"})
    } catch (error) {
        return res
      .status(404)
      .json({ message: "No se pudo eliminar el Post"});
    }
}