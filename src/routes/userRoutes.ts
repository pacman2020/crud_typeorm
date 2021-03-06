import { UserController } from '../controllers/userController'
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const user = new UserController()

const routes = Router();

routes.get('/users', user.all_user)
routes.post('/users', user.registre_user)
routes.delete('/users/:id', ensureAuthenticated ,ensureAdmin , user.delete_user )


export default routes