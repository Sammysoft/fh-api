import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    pasword: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    }
}, {
    timestamps: true
})
const userModel = mongoose.model('users', userSchema)
export default userModel;