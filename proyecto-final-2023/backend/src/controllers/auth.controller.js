// autenticacion del usuario

import User from "../models/user.models.js";
import bcrypt from "bcrypt";

// importo para hacer la forma 2
import { createAccesToken } from "../middlewares/jwt.validator.js";
// para verificar el token pedido desde el frond
import jwt from "jsonwebtoken"
import {settingDotEnvSecret} from "../config/dotenv.js"



// registro de usuario
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  // validar el usuario 
  const userFound = await User.findOne({email})
  if(userFound) return res.status(400).json(["Email usado"])


  
  try {
    // encriptar contraseña
    const passwordHash = await bcrypt.hash(password, 10);
    // crea usuario
    const newUser = new User({
      username,
      email,
      // paso la contraseña encriptada
      password: passwordHash,
    });

    const userSaved = await newUser.save();

    // TOKEN: forma 1
    // // firmar
    // jwt.sign(
    //     {id: userSaved._id},
    //     "proyecto-final",
    //     {expiresIn: "10h"},
    //     // hago una funcion que va a hacer el error o el token
    //     (err,token) =>{
    //         if(err) console.log(err)
    //         // usando cookies
    //         res.cookie("token",token)
    //         res.json({userSaved});
    //     })

    // TOKEN: forma 2
    // con la forma 2 modularizamos en la carpeta middlewares

    const token = await createAccesToken({ id: userSaved._id });
    res.cookie("token", token);
    res.json({
      message: "Usuario registrado con Exito",
      // tambien le podemos pasar estos datos
      id: userSaved.id,
      username: userSaved.username,
      email: userSaved.email,
    });

    // esto es antes de usar el token
    // res.status(200).json(userSaved)
  } catch (error) {
    res.status(500).json({ message: "Error al registro del Usuario ", error });
  }
};

// login de usuario
export const login = async (req,res) => {
    const {email,password} = req.body
    try {
        const userFound = await User.findOne({email})
        if(!userFound) return res.status(400).json(["Error en las Credenciales"])

    // comparamos password
    const match = await bcrypt.compare(password, userFound.password)

    if(!match) return res.status(400).json(["Error en las Credenciales"])

    // genero nuevamente el token 
        // TOKEN: forma 2
    // con la forma 2 modularizamos en la carpeta middlewares

    const token = await createAccesToken({ id: userFound._id });
    res.cookie("token", token);
    res.json({
      message: "Usuario registrado con Exito",
      // tambien le podemos pasar estos datos
      id: userFound.id,
      username: userFound.username,
      email: userFound.email,
    });

    } catch (error) {
        res.status(500).json({message: "Error al logearse", error})
    }
}

export const logout = async (req,res) =>{
    // limpia el token y reinicia a 0 el tiempo
    res.cookie("token","",{expires: new Date(0)})
    return res.status(200).json({message: "Nos vemos"})

}

// Profile
export const profile = async (req,res) =>{
    try {
      // esto viende req.user de la validacion validateToken.js proceso inverso
    const userFound = await User.findById(req.user.id)
    if(!userFound) return res.status(400).json({message: "Usuario no encontrado"})
    res.json({
      message: "Bienvenido",username: userFound.name,
      username: userFound.username,
      email: userFound.email,
    });
    } catch (error) {
      res.status(500).json({message: "Error al cargar perfil", error})
    }
}

const {secret} = settingDotEnvSecret();
export const verifyToken = async (req,res) =>{
  const {token} = req.cookies
  if(!token) return res.status(401).json({message:"No autorizado"});

  jwt.verify(token,secret,async(err,user) =>{
    if(err) return res.status(401).json({message:"No autorizado"});

    const userFound = await User.findById(user.id);
    if(!userFound) return res.status(401).json({message:"No autorizado"});

    return res.json({
      id: userFound._id,
      usename: userFound.username,
      email: userFound.email
    });

  });
}