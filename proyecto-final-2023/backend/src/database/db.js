import mongoose from "mongoose"
// traigo el dotenv
import {settingDotEnvDB} from "../config/dotenv.js"

// desestructuro
const {db} = settingDotEnvDB();

// usando una funcion 
export const connectMongo = async() =>{
    try {
        await mongoose.connect(db.host)
        console.log("base de datos conectada");
    } catch (error) {
        console.log("error al conectarse la base de datos",error);
    }
}