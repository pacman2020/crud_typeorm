import { Request, Response } from 'express';
import { UserService } from '../servives/userService';


export class UserController {
    async registre_suggestion(request: Request, response : Response){
        const {title, description} = request.body
        
        const userService = new UserService()

        const user = await userService.execute(request.body)

        return response.status(200).json(user)
    }
}