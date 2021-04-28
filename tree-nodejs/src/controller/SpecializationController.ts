import { getRepository } from 'typeorm';
import { Specialization } from '../model/Specialization';
import { Request, Response } from 'express';
import { Address } from '../model/Address';

export const findSpecializations = async (req: Request, res: Response) => {

    const specializations = await getRepository(Specialization).find();
    return res.status(200).send(specializations);
}

export const findSpecialization = async (req: Request, res: Response) => {

    const { id } = req.params;
    const specialization = await getRepository(Specialization).findOne(id);   
    return res.status(200).send(specialization);
}

export const saveSpecialization = async (req: Request, res: Response) => {

    const specialization = await getRepository(Specialization).save(req.body);
    res.status(201).json(specialization);
}

export const updateSpecialization = async (req: Request, res: Response) => {

    const { id } = req.params;
    if(req.body.address != null) {
        const { address } = req.body;     
        await getRepository(Address).save(address);
    }
    const specialization = await getRepository(Specialization).update(id, req.body);

    if(specialization.affected === 1) {
        const specializationUpdated = await getRepository(Specialization).findOne(id, { relations: ["address"] });
        return res.status(200).send(specializationUpdated);
    }

    return res.status(404).json({
        message: "Specialization not found."
    })
}

export const deleteSpecialization = async (req: Request, res: Response) => {

    const { id } = req.params;

    const job = await getRepository(Specialization).findOne(id);
    await getRepository(Address).delete(job.address.id);
    
    await getRepository(Specialization).delete(id);
    return res.status(200).json({ message: "Specialization deleted" });
}