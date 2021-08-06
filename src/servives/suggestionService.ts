import { validate } from 'class-validator';
import { getCustomRepository } from 'typeorm'
import { SuggetionRepository } from '../repositories/SuggestionRepository';
import { ISuggestionRequest } from './dto/SuggestionDto';


export class SuggestionService {

    async all(){
        const suggestionRepository = getCustomRepository(SuggetionRepository)

        const suggestion = await suggestionRepository.find();

        return suggestion;
    }

    async one(id: number){
        const userRepository = getCustomRepository(SuggetionRepository)

        const user = await userRepository.findOne(id);

        return user;
    }

    async create({title, description, user_id}: ISuggestionRequest){
        const suggestionRepository = getCustomRepository(SuggetionRepository)

        const suggestion = suggestionRepository.create({
            title,
            description,
            user_id
        });

        const erros = await validate(suggestion)

        if(erros.length > 0 ){
            //create a list of errors
            let msgErro = {'erros': []}

            erros.map((e)=>{
                msgErro.erros.push(e.constraints)
            })
            return msgErro
        }

        await suggestionRepository.save(suggestion);
        return suggestion;
    }
    
    async update(id:number ,{title, description, user_id}: ISuggestionRequest){
        const suggestionRepository = getCustomRepository(SuggetionRepository)

        const suggestion = suggestionRepository.create({ 
                title,
                description,
                user_id
            })

        //refatora codigo em função
        const erros = await validate(suggestion)

        if(erros.length > 0 ){
                //create a list of errors
                let msgErro = {'erros': []}
    
                erros.map((e)=>{
                    msgErro.erros.push(e.constraints)
                })
                return msgErro
            }

        await suggestionRepository.update(id, suggestion);

        return suggestion;
    }

    async destroy(id:number ){
        const suggestionRepository = getCustomRepository(SuggetionRepository)

        const suggestion = await suggestionRepository.delete(id);

        return suggestion;
    }
}