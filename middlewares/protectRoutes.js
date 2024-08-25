import jwt from "jsonwebtoken";

export const protectRoute = async (request, response, next ) => {
    const token = request.cookies.jwt;

    if (!token) {
        response.status(500).send({message:"Invalid jwt token"});
        return;
    }

    const {id} = jwt.decode(token, process.env.JWT_SECRET);

    request.id = id;

    next();
};