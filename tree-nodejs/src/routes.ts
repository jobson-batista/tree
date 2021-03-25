import { Router, Request, Response } from 'express';
import { deleteUser, findUser, findUsers, saveUser, updateUser } from './controller/UserController';

const routes = Router();

// Rotas de User
routes.get('/users', findUsers);
routes.get('/users/:id', findUser);
routes.post('/users', saveUser);
routes.put('/users/:id', updateUser);
routes.delete('/users/:id', deleteUser);

export default routes;