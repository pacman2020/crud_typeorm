import { UserController } from '../controllers/userController'
import { Router } from 'express';

const user = new UserController()

const routes = Router();

routes.post('/users', user.registre_suggestion)


export default routes