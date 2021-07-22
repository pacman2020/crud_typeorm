import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserRepository';
import { IUserRequest } from './dto/UserDto';


export class UserService {
    async execute({username, email, password}: IUserRequest){
        const userRepository = getCustomRepository(UserRepository)

        const userExists = await userRepository.findOne({email})
        console.log('-->', userExists)

        if(userExists){
            throw new Error('Email incorrect')
        }

        const user = userRepository.create({
            username, email, password
        });

        await userRepository.save(user);
        return user;
    }
}