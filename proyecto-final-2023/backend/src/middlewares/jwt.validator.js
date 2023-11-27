import jwt from "jsonwebtoken"
import {settingDotEnvSecret} from "../config/dotenv.js"
 
 const {secret} = settingDotEnvSecret();
 
 export const createAccesToken = (payload) => {
    // retorna una promesa
    return new Promise ((resolve, reject) => {
         // firmar
         jwt.sign(payload,secret,{expiresIn: "10h"},
            // hago una funcion que va a hacer el error o el token
            (err,token) => {
               // usando ternario
               err ? reject(err) : resolve(token)

               // usando el if comun

               //  if(err) reject(err)
               //  // usando 
               //  resolve(token)
            })
    })
 }
