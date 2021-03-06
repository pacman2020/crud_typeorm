import { Request, Response } from 'express';
import { SuggestionService } from '../servives/suggestionService';


export class SuggestionController {
    async all_suggestion(request: Request, response : Response){

        const suggestionService = new SuggestionService() 
        const suggestion = await suggestionService.all()
        console.log('---', suggestion)

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

        const suggestion = await suggestionService.create({
            title, description, user_id: Number(userId)
        })

        if(suggestion['erros']){
            return response.status(400).json(suggestion['erros'])
        }


        return response.json(suggestion)
    }
    
    async update_suggestion(request: Request, response : Response){
        const { userId } = request
        
        const {title, description} = request.body
        
        const suggestionService = new SuggestionService()

        const suggestion = await suggestionService.update(Number(request.params.id),{
            title, description, user_id: Number(userId)
        })

        if(suggestion['erros']){
            return response.status(400).json(suggestion['erros'])
        }

        return response.json(suggestion)
    }

    async destroy_suggestion(request: Request, response : Response){

        const suggestionService = new SuggestionService()

        await suggestionService.destroy(Number(request.params.id))

        return response.status(200).json('deleted suggestion')
    }
}