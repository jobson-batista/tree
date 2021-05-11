import { getRepository } from 'typeorm';
import { Event } from '../model/Event';
import { Request, Response } from 'express';
import { Address } from '../model/Address';

export const findEvents = async (req: Request, res: Response) => {

    const events = await getRepository(Event).find();
    try {
        if(events.length<1){
            return res.status(404).json({message:"Nenhum evento encontrado."})
        }
        return res.status(200).send(events);
    } catch (error) {
        res.status(500).json({message: "Erro ao obter eventos.", error_message: error.message})
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
        res.status(500).json({message: "Erro ao obter evento.", error_message: error.message})
    }
}

export const saveEvent = async (req: Request, res: Response) => {
    const { place, organizer, title, description, contactEmail } = req.body
    try {
        if( place && organizer && title && description && contactEmail){
            const event = await getRepository(Event).save(req.body);
            return res.status(201).json(event);
        }
        return res.status(400).json({message: "Algum campo está faltando."})
    } catch (error) {
        res.status(500).json({message: "Erro ao salvar evento.", error_message: error.message})
    }
}

export const updateEvent = async (req: Request, res: Response) => {
    
    const { id } = req.params;

    const {place, organizer, title, description, contactEmail } = req.body

    try {
        if(req.body.address != null) {
            const { address } = req.body;     
            await getRepository(Address).save(address);
        }    
        if( place && organizer && title && description && contactEmail ){
            const event = await getRepository(Event).update(id, req.body);
            if(event.affected === 1) {
                const eventUpdated = await getRepository(Event).findOne(id, { relations: ["address"] });
                return res.status(200).send(eventUpdated);
            }
            return res.status(404).json({
                message: "Evento não encontrado."
            })
        }    
        return res.status(400).json({message: "Algum campo está faltando."})
    } catch (error) {
        res.status(500).json({message: "Erro ao atualizar evento.", error_message: error.message})
    }
    
}

export const deleteEvent = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        if(await getRepository(Event).findOne(id)){
            const event = await getRepository(Event).findOne(id, { relations: ["address"] });
            await getRepository(Address).delete(event.address.id);
            await getRepository(Event).delete(id);
            return res.status(200).json({ message: "Evento deletado." });
        }
        return res.status(404).json({message:"Evento não encontrado."})
    } catch (error) {
        return res.status(500).json({message: "Erro ao deletar evento.", error_message: error.message})     
    }
}
