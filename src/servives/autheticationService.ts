import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserRepository';
import { IAuthenticationRequest } from './dto/AuthenticationDto';
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';


export class AuthenticationService {
    async execute({ email , password}: IAuthenticationRequest){
        const authenticationRepository = getCustomRepository(UserRepository)

        const userExists = await authenticationRepository.findOne({email})

        if(!userExists){
            throw new Error('senha ou email estao incorretos')
        }
        
        if(!bcrypt.compareSync(password, userExists.password)){
            throw new Error('senha ou email estao incorretos')
        }

        //token
        const token = sign({
            id: userExists.id,
            email: userExists.email
        }, "process.env.SECRET_KEY",{
            expiresIn : "1d"
        })

        return token;
    }
}