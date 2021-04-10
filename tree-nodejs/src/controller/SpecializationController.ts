import { getRepository } from 'typeorm';
import { Specialization } from '../model/Specialization';
import { Request, Response } from 'express';

export const findSpecializations = async (req: Request, res: Response) => {

    const specializations = await getRepository(Specialization).find();
    if (specializations.length<1){
        return res.status((404)).json({message: "No Specialization registed!"})
    }
    return res.status(302).send(specializations);
}

export const findSpecialization = async (req: Request, res: Response) => {

    const { id } = req.params;
    const specialization = await getRepository(Specialization).findOne(id);
    if(!specialization){
        return res.status(404).json({message: "Specialization not found."})
    }
    return res.status(302).send(specialization);
}

export const saveSpecialization = async (req: Request, res: Response) => {
    const {type, institution} = req.body
    for (const specia of await getRepository(Specialization).find()){
        if (specia.type == type && specia.institution == institution) {
            return res.status(400).json({message:"Specialization registered "})
        }
    }
    if (type && institution){
        const specialization = await getRepository(Specialization).save(req.body);
        res.status(201).json(specialization);
    }
    return res.status(422).json({message: "Some of the fields have not been filled in!"})
}

export const updateSpecialization = async (req: Request, res: Response) => {

    const { id } = req.params;
    const {type, institution} = req.body
    if (type && institution){
        const specialization = await getRepository(Specialization).update(id, req.body);
        if(specialization.affected === 1) {
            const specializationUpdated = await getRepository(Specialization).findOne(id);
            return res.status(200).send(specializationUpdated);
        }
        return res.status(404).json({
            message: "Specialization not found."
        })
    }
    return res.status(422).json({message:"Some of the fields have not been filled in!"})
}

export const deleteSpecialization = async (req: Request, res: Response) => {

    const { id } = req.params;
    if(getRepository(Specialization).findOne(id)){
        const specialization = await getRepository(Specialization).delete(id);
        return res.status(200).json({ message: "Specialization deleted" });
    }
    return res.status(404).json({message:"Specialization not found"})
}