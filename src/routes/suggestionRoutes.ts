import { Router } from 'express';
import { SuggestionController } from '../controllers/suggestionController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const suggestion = new SuggestionController()

const routes = Router();

routes.get('/suggestion', suggestion.all_suggestion)
routes.get('/suggestion/:id', suggestion.find_By_suggestion)
routes.post('/suggestion', ensureAuthenticated ,suggestion.registre_suggestion)
routes.put('/suggestion/:id', ensureAuthenticated ,suggestion.update_suggestion)
// routes.delete('/:id', user.remove)

export default routes