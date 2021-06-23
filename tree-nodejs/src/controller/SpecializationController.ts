import { getRepository } from 'typeorm';
import { Specialization } from '../model/Specialization';
import { Request, Response } from 'express';
import { Address } from '../model/Address';
import { findJobs } from './JobController';

export const findSpecializations = async (req: Request, res: Response) => {

    try {
        const specializations = await getRepository(Specialization).find();
        if (specializations.length<1){
            return res.status((404)).json({message: "Nenhuma pós-graduação encontrada."})
        }
        return res.status(200).send(specializations);
    } catch (error) {
        res.status(500).json({message: "Erro ao buscar uma pós-graduação.", error_message: error.message})
    }
}

export const findSpecialization = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const specialization = await getRepository(Specialization).findOne(id);
        if(!specialization){
            return res.status(404).json({message: "Pós-graduação não encontrada."})
        }
        return res.status(200).send(specialization);
    } catch (error) {
        res.status(500).json({message: "Erro ao buscar uma pós-graduação.", error_message: error.message})
    }
}

export const saveSpecialization = async (req: Request, res: Response) => {
    try {
        const {type, institution, title, description, contactEmail } = req.body
        for (const specia of await getRepository(Specialization).find()){
            if (specia.type == type && specia.institution == institution) {
                return res.status(400).json({message:"Pós-graduação já está cadastrada."})
            }
        }
        if ( type && institution && title && description && contactEmail ){
            const specialization = await getRepository(Specialization).save(req.body);
            return res.status(201).json(specialization);
        }
        return res.status(400).json({message: "Algum campo está faltando."})
    } catch (error) {
        res.status(500).json({message: "Erro ao salvar uma pós-graduação.", error_message: error.message})
    }
}

export const updateSpecialization = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const {type, institution, title, description, contactEmail} = req.body
        if(req.body.address != null) {
            const { address } = req.body;     
            await getRepository(Address).save(address);
        }
        if (type && institution && title && description && contactEmail && await getRepository(Specialization).findOne(id)){
            const specialization = await getRepository(Specialization).update(id, req.body);
            if(specialization.affected === 1) {
                const specializationUpdated = await getRepository(Specialization).findOne(id, { relations: ["address"] });
                return res.status(200).send(specializationUpdated);
            }
        } else {
            return res.status(404).json({ message: "Pós-graduação não encontrada."})
        }
        return res.status(400).json({message:"Algum campo está faltando."})
    } catch (error) {
        res.status(500).json({message: "Erro ao atualizar uma pós-graduação.", error_message: error.message})
    }
}

export const deleteSpecialization = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        if(await getRepository(Specialization).findOne(id)){
            const job = await getRepository(Specialization).findOne(id);
            if(job.address) {
                await getRepository(Address).delete(job.address.id);
            }
            await getRepository(Specialization).delete(id);
            return res.status(200).json({ message: "Pós-graduação deletada." });
        }
        return res.status(404).json({message:"Pós-graduação não econtrada."})   
    } catch (error) {
        res.status(500).json({message: "Erro ao deletar uma pós-graduação.", error_message: error.message})
    }
}