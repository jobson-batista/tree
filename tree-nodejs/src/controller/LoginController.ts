import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../model/User";
import * as bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await getRepository(User).query(`SELECT * FROM public.user WHERE email='${email}'`);
        bcrypt.compare(password, user[0].password, (error, result) => {
            if(error) { 
                return res.status(500).send({error: error})
            }
            if(result) { 
                return res.status(200).send(user[0]); 
            }
            return res.status(401).send({message: "Erro de autenticação."});
        }) 
    } catch(error) {
        return res.status(401).send({message: "Erro de autenticação."});
    }
    
}