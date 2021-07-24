import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';

export async function ensureAdmin(
    request: Request,
    response: Response,
    next: NextFunction
){
    const { userId } = request

    const userRepository = getCustomRepository(UserRepository)

    //posso fazer validação de admin
    const { admin } = await userRepository.findOne(Number(userId))

    if(admin){
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized"
    })
}