import { getRepository } from 'typeorm';
import { Job } from '../model/Job';
import { Request, Response } from 'express';
import { Address } from '../model/Address';

export const findJobs = async (req: Request, res: Response) => {
    try {
        const jobs = await getRepository(Job).find();
        if (jobs.length<1){
            return res.status(404).json({message: "Nenhum emprego registrado."});
        }
        return res.status(200).send(jobs);
    } catch (error) {
        res.status(500).json({message: "Erro ao buscar empregos.", error_message: error.message})
    }
}

export const findJob = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const job = await getRepository(Job).findOne(id);
        if (!job){
            return res.status(404).json({message:"Nenhum emprego encontrado."})
        }
        return res.status(200).send(job);
    } catch (error) {
        res.status(500).json({message: "Erro ao bucar um emprego.", error_message: error.message})
    }
}

export const saveJob = async (req: Request, res: Response) => {
    try {
        const { type, salary, title, description, contactEmail } = req.body
        if (type && salary && title && description && contactEmail){
            const job = await getRepository(Job).save(req.body);
            res.status(201).json(job);
        }
        return res.status(400).json({message: "Algum campo está faltando."})
    } catch (error) {
        res.status(500).json({message: "Erro ao salvar um emprego.", error_message: error.message})
    }
}

export const updateJob = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const {type, salary, title, description, contactEmail} = req.body
        if(req.body.address != null) {
            const { address } = req.body;     
            await getRepository(Address).save(address);
        }
        const job = await getRepository(Job).update(id, req.body);
        if( type && salary && title && description && contactEmail && job.affected === 1){
            const jobUpdated = await getRepository(Job).findOne(id, { relations: ["address"] });
            return res.status(200).send(jobUpdated).json({message: "Emprego atualizado."});
        }
        return res.status(400).json({message:"Algum campo está faltando."})
    } catch (error) {
        res.status(500).json({message: "Erro ao atualizar um emprego.", error_message: error.message})
    }
}

export const deleteJob = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        if(await getRepository(Job).findOne(id)){
            const job = await getRepository(Job).findOne(id);
            if(job.address){
                await getRepository(Address).delete(job.address.id);
            }
            await getRepository(Job).delete(id);
            return res.status(200).json({ message: "Emprego deletado." });
        }
        return res.status(404).json({message:"Emprego não encontrado."})
    } catch (error) {
        res.status(500).json({message: "Erro ao deletar um emprego.", error_message: error.message})
    }
}