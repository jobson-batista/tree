import { getRepository } from 'typeorm';
import { Address } from '../model/Address';
import { Request, Response } from 'express';

export const findAddress = async (req: Request, res: Response) => {

    const address = await getRepository(Address).find();
    return res.status(302).send(address);
}

export const findAddressById = async (req: Request, res: Response) => {

    const { id } = req.params;
    const address = await getRepository(Address).findOne(id);
    return res.status(302).send(address);
}

export const saveAddress = async (req: Request, res: Response) => {

    const address = await getRepository(Address).save(req.body);
    return res.status(201).json(address);
}

export const updateAddress = async (req: Request, res: Response) => {

    const { id } = req.params;
    const address = await getRepository(Address).update(id, req.body);

    if(address.affected === 1) {
        const addressUpdated = await getRepository(Address).findOne(id);
        return res.status(200).send(addressUpdated);
    }

    return res.status(404).json({
        message: "Address not found."
    })
}

export const deleteAddress = async (req: Request, res: Response) => {

    const { id } = req.params;
    const address = await getRepository(Address).delete(id);
    return res.status(200).json({ message: "Address deleted" });
}