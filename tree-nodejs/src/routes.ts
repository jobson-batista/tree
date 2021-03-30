import { Router, Request, Response } from 'express';
import { deleteJob, findJob, findJobs, saveJob, updateJob } from './controller/JobController';
import { findSpecializations, findSpecialization, deleteSpecialization, saveSpecialization, updateSpecialization } from './controller/SpecializationController';
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

// Rotas para Specialization
routes.get('/specializations', findSpecializations);
routes.get('/specialization/:id', findSpecialization);
routes.post('/specialization', saveSpecialization);
routes.put('/specialization/:id', updateSpecialization);
routes.delete('/specialization/:id', deleteSpecialization);

export default routes;