import { User } from "../models/user.model.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { generateTokenAndSetCookie } from "../utils/generateTokenandSetCookies.js";
 
export const signIn = async (request, response) => {
    const {email, password} = request.body;

    // Check empty values
    if (!email || !password) {
        response.status(500).send({message:"Please fill all required fields"});
        return;
    }

    const user = await User.findOne({email});

    if (!user) {
        response.status(500).send({message:"Wrong email or password"});
        return;
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) {
        response.status(500).send({message:"Wrong email or password"});
        return;
    }

    generateTokenAndSetCookie(user._id, response);

    response.status(200).send({message:"Logged in successfully", data: user});
};

export const signUp = async (request, response) => {
    const {email, password} = request.body;

    // Check empty values
    if (!email || !password) {
        response.status(500).send({message:"Please fill all required fields"});
        return;
    }

    // Check existing user
    const existingUser = await User.findOne({email});

    if (existingUser) {
        response.status(500).send({message:"Email already in use"});
        return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const profilePic = `https://avatar.iran.liara.run/public/boy?username=${encodeURIComponent(email)}`;

    const newUser = await User.create({
         email,
         password: hashedPassword,
         profilePic
    });
    generateTokenAndSetCookie(newUser._id, response);

    response
     .status(201)
     .send({message:"user created successfully", data: newUser});
};

export const logOut = async (request, response) => {
    
    response.cookie("jwt", "");
    response.status(200).send({ message: "Logged out successfully" });
};