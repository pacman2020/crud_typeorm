import { Request, Response } from 'express';
import { SuggestionService } from '../servives/suggestionService';


export class SuggestionController {
    async all_suggestion(request: Request, response : Response){

        const suggestionService = new SuggestionService()

        const suggestion = await suggestionService.all()
        
        return response.status(200).json(suggestion)
    }

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