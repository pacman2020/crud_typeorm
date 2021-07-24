import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload{
    sub: string;
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
        const token = authtoken.split(" ")[1]
        const {sub} = verify(token, "process.env.SECRET_KEY") as IPayload

        request.userId = sub

        next()
        
    } catch (error) {
        return response.status(401).end()
    }
        
    }

