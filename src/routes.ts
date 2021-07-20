import { UserController } from "./controller/UserController";
import { Router } from 'express';

const user = new UserController()

const routes = Router();

routes.get('/', user.all)

export default routes