import userRepository from "../repositories/UserRepository";
import { Router } from 'express';
import { Request, Response} from "express";
import { getCustomRepository } from "typeorm";
import { User } from "../entity/User";


const routes = Router();

routes.get('/users', async (request: Request ,response: Response)=>{
    try {
        const repositories = getCustomRepository(userRepository);
        const result = await repositories.findall()
        return response.status(200).json(result)

    } catch (error) {
        console.log('error.message :>> ', error.message);
        return response.status(400).send();
    }
})

routes.get('/users/:id', async (request: Request ,response: Response)=>{
    try {
        const repositories = getCustomRepository(userRepository);
        const result = await repositories.findById(Number(request.params.id))
        return response.status(200).json(result)

    } catch (error) {
        console.log('error.message :>> ', error.message);
        return response.status(400).send();
    }
})

routes.post('/users', async (request: Request ,response: Response)=>{
    try {
        const { username, email, password } = request.body

        let new_user = new User()
        new_user.username = username
        new_user.email = email
        new_user.password = password

        console.log(new_user)
        const repositories = getCustomRepository(userRepository);
        const result = await repositories.save(new_user)

        return response.status(201).json(result)

    } catch (error) {
        console.log('error.message :>> ', error.message);
        return response.status(400).send();
    }
})
// routes.get('/:id', user.one)
// routes.post('/', user.save)
// routes.delete('/:id', user.remove)

export default routes