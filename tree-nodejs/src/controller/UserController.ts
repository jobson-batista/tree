import { getRepository } from 'typeorm';
import { User } from '../model/User';
import { Request, Response } from 'express';

export const findUsers = async (req: Request, res: Response) => {

    const users = await getRepository(User).find();
    return res.status(302).send(users);
}

export const findUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const user = await getRepository(User).findOne(id);
    console.log(user.created_at);    
    return res.status(302).send(user);
}

export const saveUser = async (req: Request, res: Response) => {

    const user = await getRepository(User).save(req.body);
    res.status(201).json(user);
}

export const updateUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const user = await getRepository(User).update(id, req.body);

    if(user.affected === 1) {
        const userUpdated = await getRepository(User).findOne(id);
        return res.status(200).send(userUpdated);
    }

    return res.status(404).json({
        message: "User not found."
    })
}

export const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const user = await getRepository(User).delete(id);
    return res.status(200).json({ message: "User deleted" });
}