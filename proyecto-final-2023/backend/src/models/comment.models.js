import { Schema,model ,Types } from "mongoose";

const commentSchema = new Schema(
    {
        post:{
            type: Schema.Types.ObjectId,
            ref: "Post"
        },
        user:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },

        description:{
            type: String,
            required: true,
            maxLength:100,
            minLength: 5
        },
        publico:{
            type: Boolean,
            default: true
        }
    },
    {
        timestamps:true,
        versionKey: false
    }

)



export default model("Comment",commentSchema);