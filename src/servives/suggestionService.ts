import { getCustomRepository } from 'typeorm'
import { SuggetionRepository } from '../repositories/SuggestionRepository';
import { ISuggestionRequest } from './dto/SuggestionDto';


export class SuggestionService {
    async all(){
        const suggestionRepository = getCustomRepository(SuggetionRepository)

        const suggestion = suggestionRepository.find();

        return suggestion;
    }

    async execute({title, description, user_id}: ISuggestionRequest){
        const suggestionRepository = getCustomRepository(SuggetionRepository)

        const suggestion = suggestionRepository.create({
            title,
            description,
            user_id
        });

        await suggestionRepository.save(suggestion);
        return suggestion;
    }
}