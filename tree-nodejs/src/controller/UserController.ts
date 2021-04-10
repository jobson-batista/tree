import { getRepository } from 'typeorm';
import { User } from '../model/User';
import { Request, Response } from 'express';
import { read } from 'fs';
import e = require('express');

export const findUsers = async (req: Request, res: Response) => {

    const users = await getRepository(User).find();
    if (users.length<1){
        return res.status(404).json({message: "No registered users!"});
    }
    return res.status(302).send(users);
}

export const findUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getRepository(User).findOne(id);
    if(!user){
        return res.status(404).json({message: "User not found!"})
    }
    console.log(user.created_at);    
    return res.status(302).send(user);
}

export const saveUser = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password, phoneNumber } = req.body
    for (const user of await getRepository(User).find()) {
        if (user.email==email){
            return res.status(400).json({message: "Email registed"});
        }
    }
    if (firstName && lastName && email && password && phoneNumber){
        const user = await getRepository(User).save(req.body);
        return res.status(201).json(user);
    }
    return res.status(422).json({message: "Some of the fields have not been filled in!"})
}

export const updateUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const {firstName, lastName, email, password, phoneNumber} = req.body
    if (firstName && lastName && email && password && phoneNumber){
        const user = await getRepository(User).update(id, req.body);
    
        if(user.affected === 1) {
            const userUpdated = await getRepository(User).findOne(id);
            return res.status(200).send(userUpdated);
        }
        return res.status(404).json({
            message: "User not found."
        })
    }
    return res.status(422).json({message: "Some of the fields have not been filled in!"})

}
export const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    if (getRepository(User).findOne(id)){
        const user = await getRepository(User).delete(id);
        return res.status(200).json({ message: "User deleted" });
    }
    return res.status(404).json({message: "User not found"});

}