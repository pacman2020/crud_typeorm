import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload{
    id: Number;
}


export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
){
    const authtoken = request.headers.authorization

    if(!authtoken){
        return response.status(401).end()
    }
    try {
        const token = authtoken.split(" ")

        const { id } = verify(token[1], "process.env.SECRET_KEY") as IPayload
        request.userId = id

        next()
        
    } catch (error) {
        return response.status(401).end()
    }
        
    }

