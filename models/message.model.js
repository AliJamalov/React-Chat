import mongoose from "mongoose";

const MessageShema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, {timestamps: true});

const Message = mongoose.model("Message",MessageShema);

export default Message;