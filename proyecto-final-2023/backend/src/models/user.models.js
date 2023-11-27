import {Schema,model} from "mongoose"

const userSchema = new Schema ({
    username:{
        type: String,
        required: true,
        // unique: true,
        trin: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trin: true
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true,
    versionKey: false,//para que no salga el __id __v
})
// exportamos y nombramos como se va a llamar en este caso user
export default model("User",userSchema);