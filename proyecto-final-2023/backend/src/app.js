import express from "express"
import morgan from "morgan"
import cors from "cors"
import {connectMongo} from "./database/db.js"
import cookieParser from "cookie-parser"
// una de las maneras de importar la ruta de usuario pero al importar despuestraera confuncion
// import {routes} from "./routes/auth.routes.js"
import authRoutes from "./routes/auth.routes.js"
import commentRoutes from "./routes/comment.routes.js"
import postRoutes  from "./routes/post.routes.js"





export const app = express()

// funcion para conexion a DB
connectMongo();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// app.use(routes)
app.use(authRoutes)
app.use(commentRoutes)
app.use(postRoutes)