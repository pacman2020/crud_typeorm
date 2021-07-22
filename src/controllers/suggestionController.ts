import { Request, Response } from 'express';
import { SuggestionService } from '../servives/suggestionService';


export class SuggestionController {
    async registre_suggestion(request: Request, response : Response){
        const {title, description} = request.body
        
        const suggestionService = new SuggestionService()

        const suggestion = await suggestionService.execute({
            title, description
        })

        return response.json(suggestion)
    }
}