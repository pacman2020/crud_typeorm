import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { SuggestionController } from '../controllers/suggestionController'

const suggestion = new SuggestionController()

const routes = Router();

// routes.get('/', user.all)
// routes.get('/:id', user.one)
routes.post('/suggestion', ensureAdmin ,suggestion.registre_suggestion)
// routes.delete('/:id', user.remove)

export default routes