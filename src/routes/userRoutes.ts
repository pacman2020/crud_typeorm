import { UserController } from "../controller/UserController";
import { Router } from 'express';

const user = new UserController()

const routes = Router();

routes.get('/', user.all)
// routes.get('/:id', user.one)
// routes.post('/', user.save)
// routes.delete('/:id', user.remove)

export default routes