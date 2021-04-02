import { getRepository } from 'typeorm';
import { Event } from '../model/Event';
import { Request, Response } from 'express';
import { Address } from '../model/Address';

export const findEvents = async (req: Request, res: Response) => {

    const events = await getRepository(Event).find({ relations: ["address"] });
    return res.status(302).send(events);
}

export const findEvent = async (req: Request, res: Response) => {

    const { id } = req.params;
    const event = await getRepository(Event).findOne(id, { relations: ["address"] });
    return res.status(302).send(event);
}

export const saveEvent = async (req: Request, res: Response) => {

    const event = await getRepository(Event).save(req.body);
    res.status(201).json(event);
}

export const updateEvent = async (req: Request, res: Response) => {
    
    const { address: {id: idAddress}, address} = req.body;     
    const { id } = req.params;
    const event = await getRepository(Event).update(id, req.body);
    await getRepository(Address).update(idAddress, address);

    if(event.affected === 1) {
        const eventUpdated = await getRepository(Event).findOne(id);
        return res.status(200).send(eventUpdated);
    }

    return res.status(404).json({
        message: "Event not found."
    })
}

export const deleteEvent = async (req: Request, res: Response) => {

    const { id } = req.params;
    const event = await getRepository(Event).findOne(id);
    await getRepository(Address).delete(event.address.id);
    await getRepository(Event).delete(id);
    
    //const addressId = await getRepository(Event)
    return res.status(200).json({ message: "Event deleted" });
}