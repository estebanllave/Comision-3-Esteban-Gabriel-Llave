import dotenv from "dotenv";

dotenv.config()

// puerto
export const settingDotEnvPort = () =>{
    return {port:process.env.PORT || 4000}
}

// DB
export const settingDotEnvDB = () =>{
    return {
         db:{
        host: process.env.DB_HOST
    }}
}

// palabra secreta
export const settingDotEnvSecret = () =>{
    return { secret: process.env.SECRET_KEY};
}