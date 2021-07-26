import { Request, Response } from 'express';
import { UserService } from '../servives/userService';


export class UserController {
    async all_user(request: Request, response : Response){

        const userService = new UserService()

        const user = await userService.all()
        
        return response.status(200).json(user)
    }


    async registre_suggestion(request: Request, response : Response){
        const {title, description} = request.body
        
        const userService = new UserService()

        const user = await userService.execute(request.body)

        return response.status(200).json(user)
    }

    async delete_user(request: Request, response : Response){

        const userService = new UserService()

        await userService.destroy(Number(request.params.id))
        
        return response.status(200).json('user deleted')
    }

}