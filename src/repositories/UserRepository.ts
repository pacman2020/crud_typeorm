import { EntityRepository, Repository } from "typeorm";
import {User} from "../entity/User";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {

    public async findall(): Promise<User[]> {
        return this.find();
    }

}

