import { response } from "express";
import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (id, response) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET);

    response.cookie("jwt", token);
}