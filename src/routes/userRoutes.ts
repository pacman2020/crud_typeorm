import userRepository from "../repositories/UserRepository";
import { Router } from 'express';
import { Request, Response} from "express";
import { getCustomRepository } from "typeorm";


const routes = Router();

routes.get('/users', async (request: Request ,response: Response)=>{
    try {
        const repositories = getCustomRepository(userRepository);
        const result = await repositories.findall()
        return response.json(result)

    } catch (error) {
        console.log('error.message :>> ', error.message);
        return response.status(400).send();
    }
})
// routes.get('/:id', user.one)
// routes.post('/', user.save)
// routes.delete('/:id', user.remove)

export default routes