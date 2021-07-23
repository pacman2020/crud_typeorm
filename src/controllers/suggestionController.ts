import { Request, Response } from 'express';
import { SuggestionService } from '../servives/suggestionService';


export class SuggestionController {
    async registre_suggestion(request: Request, response : Response){
        const user_id = 2
        const {title, description} = request.body
        
        const suggestionService = new SuggestionService()

        const suggestion = await suggestionService.execute({
            title, description, user_id
        })

        return response.json(suggestion)
    }
}