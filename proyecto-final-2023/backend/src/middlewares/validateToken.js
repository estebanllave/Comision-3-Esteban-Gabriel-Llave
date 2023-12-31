import  jwt  from "jsonwebtoken";
import {settingDotEnvSecret} from "../config/dotenv.js"



const {secret} = settingDotEnvSecret() 

export const authRequired = (req, res, next) => {
    const { token } = req.cookies;
  
    if (!token) return res.status(401).json({ message: "No token provided" });
  
    jwt.verify(token, secret, (err, user) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ message: "Token has expired", error: err });
        }
        return res.status(403).json({ message: "Invalid token", error: err });
      }
      
      req.user = user;
      next();
    });
  };
  

// export const authRequired = (req,res,next) =>{

//     // hago el proceso inverso al logearse con el consol veo si me llega el cookie para despues tratarlo
//     // console.log(req.headers.cookie);
//     const {token} = req.cookies;

//     if(!token) return res.status().json({message:"No hay token"})

//     // como hacemos el proceso inverso ahora ponemos el usuario
//     jwt.verify(token,secret,(err, user) =>{
//         if(err) return res.status(403).json({message: "Token invalido"})
//         // console.log(user);
//         req.user = user
//     })

//     // si esta ok
//     next()
// }
