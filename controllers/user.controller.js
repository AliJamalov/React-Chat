import {User} from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
    
    // send back all users except logged in user
    const id = req.id

    const allUsers = await User.find({_id:{$ne:id}});

    res.status(200).send({data:allUsers});
};