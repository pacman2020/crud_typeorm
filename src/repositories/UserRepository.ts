import { EntityRepository, Repository } from "typeorm";
import {User} from "../entity/User";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {

    public async findall(): Promise<User[]> {
        return this.find();
    }
    
    public async findById(id: number): Promise<User> {
        return this.findOne(id)
    }
    
    public async craete(date: User): Promise<User> {
        return this.save(date)
    }
    
    public async updateUser(id: String ,date: User): Promise<User> {

        const { username, email, password } = date

        let new_user = await this.findOne(String(id))

        if(!new_user){
            return new_user
        }

        new_user.username = username
        new_user.email = email
        new_user.password = password

        return this.save(new_user)
    }

}