import { app } from "./app.js";
import {settingDotEnvPort} from "./config/dotenv.js"

// desestructuro settingDotEnvPort
const {port} = settingDotEnvPort()


app.listen(port,console.log(`Servidor en puerto , ${port}`));