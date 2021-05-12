//import { Address } from "./Address";

export interface Vacancy {
    type: string;
    title:string;
    description: string;
    promoter: string;
    startDate: Date;
    endDate: Date;
    contactEmail: string;
    qty: number;
   // address: Address;
    created_at: Date;
    updated_at: Date;
}