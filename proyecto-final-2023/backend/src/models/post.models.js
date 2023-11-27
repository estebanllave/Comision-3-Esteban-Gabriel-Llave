// importo Schema
import { Schema,model ,Types } from "mongoose";

const postSchema = new Schema(
   {
    mount:{
        type: Number,
        min:0
    } ,
    
    
    name:{
        type:String,
        required: true,
        trin: true
    },
    image:{
        type: String
    },

    description:{
        type: String,
        required: true,
        maxLength:500,
        minLength: 10
    },
    comments:[
        {
            type: Schema.Types.ObjectId,
            ref: "Comment",
           
        },
    ],
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
},
{
    timestamps: true,
    versionKey: false
}

)

postSchema.pre("save",async function (next) {
    const comments = await this.model("Comment").find({
        _id: {$in: this.comments},
    });
    
    comments.forEach((com) => {
        this.mount += com;
    })

})


// exporto
export default model("Post", postSchema);