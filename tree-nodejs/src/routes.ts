import { Router, Request, Response } from 'express';
import { findEvents, findEvent, saveEvent, updateEvent, deleteEvent } from './controller/EventController';
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
routes.get('/specializations/:id', findSpecialization);
routes.post('/specializations', saveSpecialization);
routes.put('/specializations/:id', updateSpecialization);
routes.delete('/specializations/:id', deleteSpecialization);

// Rotas para Event
routes.get('/events', findEvents);
routes.get('/events/:id', findEvent);
routes.post('/events', saveEvent);
routes.put('/events/:id', updateEvent);
routes.delete('/events/:id', deleteEvent);

export default routes;