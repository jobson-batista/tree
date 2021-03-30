import { Router, Request, Response } from 'express';
import { deleteJob, findJob, findJobs, saveJob, updateJob } from './controller/JobController';
import { deleteUser, findUser, findUsers, saveUser, updateUser } from './controller/UserController';

const routes = Router();

// Rotas de User
routes.get('/users', findUsers);
routes.get('/users/:id', findUser);
routes.post('/users', saveUser);
routes.put('/users/:id', updateUser);
routes.delete('/users/:id', deleteUser);

// Rotas de Jobs
routes.get('/jobs', findJobs);
routes.get('/jobs/:id', findJob);
routes.post('/jobs', saveJob);
routes.put('/jobs/:id', updateJob);
routes.delete('/jobs/:id', deleteJob);

export default routes;