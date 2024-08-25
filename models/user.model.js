import mongoose from "mongoose";

const UserShema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        required: true
    }
})

export const User = mongoose.model("User", UserShema);