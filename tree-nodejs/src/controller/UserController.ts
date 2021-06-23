import { getRepository } from 'typeorm';
import { User } from '../model/User';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import e = require('express');

export const findUsers = async (req: Request, res: Response) => {

    const users = await getRepository(User).find();
    if (users.length<1){
        return res.status(404).json({message: "No registered users!"});
    }
    return res.status(200).send(users);
}

export const findUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getRepository(User).findOne(id);
    if(!user){
        return res.status(404).json({message: "User not found!"})
    }  
    return res.status(200).send(user);
}

export const saveUser = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    for (const user of await getRepository(User).find()) {
        if (user.email==email){
            return res.status(400).send({message: "Email registed"});
        }
    }
    if (firstName && lastName && email && password && phoneNumber){
        bcrypt.hash(password, 10, async (errorBcrypt, hash) => {                 
            if(errorBcrypt) { return res.status(500).send({error: errorBcrypt})}
            req.body.password = hash;
            await getRepository(User).save(req.body);
        })
        return res.status(201).send({message: "Cadastrado com sucesso!"});
    }
    return res.status(422).send({message: "Some of the fields have not been filled in!"})
}

export const updateUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const {firstName, lastName, email, password, phoneNumber} = req.body
    if (firstName && lastName && email && password && phoneNumber){
        bcrypt.hash(password, 10, async (error, hash) => {
            if(error) { 
                return res.status(500).send({error: error})
            }
            req.body.password = hash;
            await getRepository(User).update(id, req.body);
        })
        return res.status(200).send(await getRepository(User).findOne(id));
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