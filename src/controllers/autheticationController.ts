import { Request, Response } from 'express';
import { AuthenticationService } from '../servives/autheticationService';


export class AuthenticationController {
    async login(request: Request, response : Response){
        const {email, password} = request.body
        
        const authenticationService = new AuthenticationService()

        const user = await authenticationService.execute(request.body)

        return response.status(200).json(user)
    }
}