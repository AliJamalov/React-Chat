import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
   const senderId = req.id;
   const {talkingToId:receiverId} = req.params;
   const {content} = req.body

   if (!senderId || !receiverId || !content) {
    res.status(500).send({message:"please fill all fields"});
    return;
   }

   // new message
   const newMessage = await Message.create({content, receiverId, senderId});

   if (!newMessage) {
    res.status(400).send({message:"something went wrong"});
    return;
   }

   res.status(201).send(newMessage);
};

export const getMessage = async (req, res) => {};