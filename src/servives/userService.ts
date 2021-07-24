import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserRepository';
import { IUserRequest } from './dto/UserDto';
import * as bcrypt from 'bcrypt';


export class UserService {
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

        await userRepository.save(user);
        return user;
    }
}