import { getRepository } from 'typeorm';
import { Job } from '../model/Job';
import { Request, Response } from 'express';
import { Address } from '../model/Address';

export const findJobs = async (req: Request, res: Response) => {

    const jobs = await getRepository(Job).find();
    return res.status(200).send(jobs);
}

export const findJob = async (req: Request, res: Response) => {

    const { id } = req.params;
    const job = await getRepository(Job).findOne(id);
    return res.status(200).send(job);
}

export const saveJob = async (req: Request, res: Response) => {

    const job = await getRepository(Job).save(req.body);
    res.status(201).json(job);
}

export const updateJob = async (req: Request, res: Response) => {

    const { id } = req.params;
    if(req.body.address != null) {
        const { address } = req.body;     
        await getRepository(Address).save(address);
    }
    const job = await getRepository(Job).update(id, req.body);

    if(job.affected === 1) {
        const jobUpdated = await getRepository(Job).findOne(id, { relations: ["address"] });
        return res.status(200).send(jobUpdated);
    }

    return res.status(404).json({
        message: "Job not found."
    })
}

export const deleteJob = async (req: Request, res: Response) => {

    const { id } = req.params;

    const job = await getRepository(Job).findOne(id);
    await getRepository(Address).delete(job.address.id);
    
    await getRepository(Job).delete(id);
    return res.status(200).json({ message: "Job deleted" });
}