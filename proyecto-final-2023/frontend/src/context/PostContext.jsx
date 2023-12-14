import { createContext, useContext, useState } from "react";
import {createPostReq,getPostByIdReq,deletePostReq,getPostReq,updatePostReq,getAllByIdUserRep} from "../api/postAxios"

const PostContext = createContext();


export const usePosts = () =>{
    const context = useContext(PostContext);
    if(!context) throw new Error("Error en el contexto de las tareas")
    return context
}




export const PostProvider = ({children}) =>{

    const [post,setPost] = useState([])

    // crear Post
    const createPost = async(post)=>{
        // console.log(post)
        const res = await createPostReq(post)
    }

// buscar
    const getAllPost = async () => {
        const res = await getPostReq();
        // console.log(res);
        try {
            setPost(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    // buscar posts por id del usuario
    const getAllPostByIdUser = async(id) =>{
        const res = await getAllByIdUserRep(id)
        console.log(res);
        try {
            
            return res.data
        } catch (error) {
            console.log(error);
        }
    }

    // eliminar
    const deletePost = async (id) =>{
        try {
            const res = await deletePostReq(id)
            console.log(res);
            if (res.status === 200) setPost(post.filter((post) =>post._id !==id));
        } catch (error) {
            console.log(error);
        }
    }

    // buscapor id
    const getPostbyId = async(id)=>{
        try {
            const res = await getPostByIdReq(id)
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    // actualizar
    const updatePost = async (id,post) =>{
        try {
            const res = await updatePostReq(id,post);
        } catch (error) {
            console.log(error);
        }
    }





    return(
        <PostContext.Provider value={{
            post,
            createPost,
            getAllPost,
            deletePost,
            getPostbyId,
            updatePost,
            getAllPostByIdUser,
        }}>
            {children}
        </PostContext.Provider>
    )
}