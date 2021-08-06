import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserRepository';
import { IUserRequest } from './dto/UserDto';
import * as bcrypt from 'bcrypt';
import { validate } from 'class-validator';


export class UserService {
    async all(){
        const userRepository = getCustomRepository(UserRepository)

        const users = userRepository.find();

        return users;
    }
    
    async destroy(id: number){
        const userRepository = getCustomRepository(UserRepository)

        const users = await userRepository.delete(id);

        return users;
    }
   

    async execute({username, email, password, admin=false}: IUserRequest){
        const userRepository = getCustomRepository(UserRepository)

        const userExists = await userRepository.findOne({email})

        if(userExists){
            throw new Error('Email ja existe')
        }

        const new_password = bcrypt.hashSync(password, 10)

        const user = userRepository.create({
            username, email, password: new_password, admin
        });

        const erros = await validate(user)

        if(erros.length > 0 ){
            //create a list of errors
            let msgErro = {'erros': []}

            erros.map((e)=>{
                msgErro.erros.push(e.constraints)
            })
            return msgErro
        }

        await userRepository.save(user);

        //removing user information
        delete user['password']
        delete user['admin']
        return user;
    }
}