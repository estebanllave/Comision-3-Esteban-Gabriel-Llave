import axios from "./setCredentials"


export const getAllCommentReq = () => axios.get(`/comment`)

export const getCommentByIdReq = (id) => axios.get(`/comment/${id}`)

export const createCommentReq = (comment) => axios.Comment(`/comment`,comment)

export const updateCommentReq = (id,comment) => axios.put(`/comment/${id}`,comment)

export const deleteCommentReq = (id) => axios.delete(`/comment/${id}`)