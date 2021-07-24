import { UserController } from '../controllers/userController'
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const user = new UserController()

const routes = Router();

routes.post('/users', ensureAuthenticated ,ensureAdmin , user.registre_suggestion)


export default routes