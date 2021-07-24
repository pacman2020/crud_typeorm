import { UserController } from '../controllers/userController'
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const user = new UserController()

const routes = Router();

routes.get('/users', user.all_user)
routes.post('/users', ensureAuthenticated ,ensureAdmin , user.registre_suggestion)


export default routes