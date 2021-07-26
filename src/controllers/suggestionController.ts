import { Request, Response } from 'express';
import { SuggestionService } from '../servives/suggestionService';


export class SuggestionController {
    async all_suggestion(request: Request, response : Response){

        const suggestionService = new SuggestionService()

        const suggestion = await suggestionService.all()

        return response.status(200).json(suggestion)
    }
    
    async find_By_suggestion(request: Request, response : Response){

        const suggestionService = new SuggestionService()

        const suggestion = await suggestionService.one(Number(request.params.id))

        return response.status(200).json(suggestion)
    }

    async registre_suggestion(request: Request, response : Response){
        const { userId } = request
        console.log(userId)
        
        const {title, description} = request.body
        
        const suggestionService = new SuggestionService()

        const suggestion = await suggestionService.execute({
            title, description, user_id: userId
        })

        return response.json(suggestion)
    }
}