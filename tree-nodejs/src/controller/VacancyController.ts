import { Request, Response } from 'express';
import { Address } from '../model/Address';
import { Job } from '../model/Job';
import { Event } from '../model/Event';
import { Specialization } from '../model/Specialization';
import { Vacancy } from '../model/Vacancy';
import { getRepository } from 'typeorm';


export const findAllVacancy = async (req: Request, res: Response) => {
    let vacancys: any[] = [];

    const events = await getRepository(Event).find();
    if(events.length >= 1){
        events.forEach((e) => {
            vacancys.push(e);
        })
    }

    const jobs = await getRepository(Job).find();
    if (jobs.length >= 1){
        jobs.forEach((j) => {
            vacancys.push(j);
        })
    }

    const specializations = await getRepository(Specialization).find();
    if (specializations.length >= 1){
        specializations.forEach((s) => {
            vacancys.push(s);
        })
    }

    if(vacancys.length >= 1 ){
        return res.status(200).send(vacancys);
    }

    return res.status(404).send({message: "Nenhuma oportunidade cadastrada."})
}