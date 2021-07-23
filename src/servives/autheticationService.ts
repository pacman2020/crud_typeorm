import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserRepository';
import { IAuthenticationRequest } from './dto/AuthenticationDto';


export class AuthenticationService {
    async execute({ email, password}: IAuthenticationRequest){
        const authenticationRepository = getCustomRepository(UserRepository)

        const userExists = await authenticationRepository.findOne({email})

        if(!userExists){
            throw new Error('user not exist')
        }
        //validaçoes

        const user = authenticationRepository.create({
            email, password
        });

        //token
        await authenticationRepository.save(user);
        return user;
    }
}