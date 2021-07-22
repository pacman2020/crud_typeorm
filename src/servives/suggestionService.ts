import { getCustomRepository } from 'typeorm'
import { SuggetionRepository } from '../repositories/SuggestionRepository';
import { ISuggestionRequest } from './dto/SuggestionDto';


export class SuggestionService {
    async execute({title, description}: ISuggestionRequest){
        const suggestionRepository = getCustomRepository(SuggetionRepository)

        const suggestion = suggestionRepository.create({
            title, description
        });

        await suggestionRepository.save(suggestion);
        return suggestion;
    }
}