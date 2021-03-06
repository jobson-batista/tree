import { Router } from 'express';
import { findAddress, saveAddress, updateAddress, deleteAddress, findAddressById } from './controller/AddressController';
import { findEvents, findEvent, saveEvent, updateEvent, deleteEvent } from './controller/EventController';
import { deleteJob, findJob, findJobs, saveJob, updateJob } from './controller/JobController';
import { login } from './controller/LoginController';
import { findSpecializations, findSpecialization, deleteSpecialization, saveSpecialization, updateSpecialization } from './controller/SpecializationController';
import { deleteUser, findUser, findUsers, saveUser, updateUser } from './controller/UserController';
import { findAllVacancy } from './controller/VacancyController';

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

// Rotas para Address
routes.get('/address', findAddress);
routes.get('/address/:id', findAddressById);
routes.post('/address', saveAddress);
routes.put('/address/:id', updateAddress);
routes.delete('/address/:id', deleteAddress);

// Login
routes.post('/login', login)

// Rota para obter todos os tipos de oportunidades
routes.get('/opportunities', findAllVacancy);

export default routes;