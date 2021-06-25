// import { Address } from './Address';

export interface Vacancy {
    id?: number;
    type: string;
    title: string;
    description: string;
    startDate?: Date;
    endDate?: Date;
    contactEmail: string;
    address?: string;
    created_at?: Date;
    updated_at?: Date;
}
