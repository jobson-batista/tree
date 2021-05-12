import { getRepository } from 'typeorm';
import { User } from '../model/User';
import { Request, Response } from 'express';

export const findUsers = async (req: Request, res: Response) => {
    try {
        const users = await getRepository(User).find();
        if (users.length<1){
            return res.status(404).json({message: "Nenhum usuário cadastrado."});
        }
        return res.status(200).send(users);
    } catch (error) {
        res.status(500).json({message: "Erro ao obter usuários.", error_message: error.message})
    }
}

export const findUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await getRepository(User).findOne(id);
        if(!user) {
            return res.status(404).json({message: "Usuário não encontrado."})
        }  
        return res.status(200).send(user);
    } catch (error) {
        res.status(500).json({message: "Erro ao obter um usuário.", error_message: error.message})
    }
}

export const saveUser = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password, phoneNumber } = req.body
        for (const user of await getRepository(User).find()) {
            if (user.email == email){
                return res.status(400).json({message: "Email já cadastrado."});
            }
        }
        if (firstName && lastName && email && password && phoneNumber){
            const user = await getRepository(User).save(req.body);
            return res.status(201).json(user);
        }
        return res.status(400).json({message: "Algum campo está faltando."})
    } catch (error) {
        res.status(500).json({message: "Erro ao salvar um usuário.", error_message: error.message})
    }
}

export const updateUser = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const {firstName, lastName, email, password, phoneNumber} = req.body
        if (firstName && lastName && email && password && phoneNumber) {
            const user = await getRepository(User).update(id, req.body);
            if(user.affected === 1) {
                const userUpdated = await getRepository(User).findOne(id);
                return res.status(200).send(userUpdated);
            }
            return res.status(404).json({
                message: "Usuário não encontrado."
            })
        }
        return res.status(400).json({message: "Algum campo está faltando."})
    } catch (error) {
        res.status(500).json({message: "Erro ao atualizar um usuário.", error_message: error.message})
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (await getRepository(User).findOne(id)){
            await getRepository(User).delete(id);
            return res.status(200).json({ message: "Usuário deletado." });
        }
        return res.status(404).json({message: "Usuário não encontrado."});
    } catch (error) {
        res.status(500).json({message: "Erro ao deletar um usuário.", error_message: error.message});
    }

}