import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/ola', (req: Request, res: Response) => {
    return res.status(200).send({ message: "Tá Rodando!" }); 
});

export default routes;