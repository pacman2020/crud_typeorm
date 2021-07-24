import { AuthenticationController } from '../controllers/autheticationController'
import { Router } from 'express';

const authentication = new AuthenticationController()

const routes = Router();

routes.post('/login', authentication.login)


export default routes