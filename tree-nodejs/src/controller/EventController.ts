import { getRepository } from 'typeorm';
import { Event } from '../model/Event';
import { Request, Response } from 'express';
import { Address } from '../model/Address';

export const findEvents = async (req: Request, res: Response) => {

    const events = await getRepository(Event).find();
    if(events.length<1){
        return res.status(404).json({message:"Events not found"})
    }
    return res.status(200).send(events);
}

export const findEvent = async (req: Request, res: Response) => {

    const { id } = req.params;
    const event = await getRepository(Event).findOne(id);
    if(event){
        return res.status(200).send(event);
    }
    return res.status(404).json({message:"Event not found"})
}

export const saveEvent = async (req: Request, res: Response) => {
    const {place, organizer} = req.body
    if(place && organizer){
        const event = await getRepository(Event).save(req.body);
        return res.status(201).json(event);
    }
    return res.status(422).json({message: "Some of the fields have not been filled in!"})
}

export const updateEvent = async (req: Request, res: Response) => {
    
    const { id } = req.params;

    const {place, organizer} = req.body
    if(req.body.address != null) {
        const { address } = req.body;     
        await getRepository(Address).save(address);
    }
    if(place && organizer){
        const event = await getRepository(Event).update(id, req.body);
        if(event.affected === 1) {
            const eventUpdated = await getRepository(Event).findOne(id, { relations: ["address"] });
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
        // const event = await getRepository(Event).findOne(id, { relations: ["address"] });
        // await getRepository(Address).delete(event.address.id);
        await getRepository(Event).delete(id);
        return res.status(200).json({ message: "Event deleted" });
    }
    return res.status(404).json({message:"Event not found"})
}
