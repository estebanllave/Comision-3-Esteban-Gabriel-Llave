// 
import axios from "axios";

// genero una instancia
const instance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})
export default instance;