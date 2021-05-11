import { getRepository } from 'typeorm';
import { Event } from '../model/Event';
import { Request, Response } from 'express';

export const findEvents = async (req: Request, res: Response) => {

    const events = await getRepository(Event).find();
    try {
        if(events.length<1){
            return res.status(404).json({message:"Nenhum evento encontrado."})
        }
        return res.status(200).send(events);
    } catch (e) {
        throw new Error("Erro ao obter eventos.\n"+e.message);
        
    }
}

export const findEvent = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const event = await getRepository(Event).findOne(id);
        if(event){
            return res.status(200).send(event);
        }
        return res.status(404).json({message:"Evento não encontrado."})
    } catch (error) {
        throw new Error("Erro ao obter um evento\n"+error.message);
        
    }
}

export const saveEvent = async (req: Request, res: Response) => {
    const { place, organizer } = req.body
    try {
        if( place && organizer){
            const event = await getRepository(Event).save(req.body);
            res.status(201).json(event);
        }
        return res.status(400).json({message: "Algum campo está faltando."})
    } catch (e) {
        throw new Error("Erro ao salva evento.\n"+e.message);
        
    }
}

export const updateEvent = async (req: Request, res: Response) => {

    const { id } = req.params;
    const {place, organizer} = req.body
    if(place && organizer){
        const event = await getRepository(Event).update(id, req.body);
        if(event.affected === 1) {
            const eventUpdated = await getRepository(Event).findOne(id);
            return res.status(200).send(eventUpdated);
        }
        return res.status(404).json({
            message: "Event not found."
        })
    }    
    return res.status(422).json({message: "Some of the fields have not been filled in!"})
}

export const deleteEvent = async (req: Request, res: Response) => {

    const { id } = req.params;
    if(getRepository(Event).findOne(id)){
        const event = await getRepository(Event).delete(id);
        return res.status(200).json({ message: "Event deleted" });
    }
    return res.status(404).json({message:"Event not found"})
}