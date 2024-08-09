import { z } from 'zod';

export const userRegisterScheme = z.object({
    username: z.string(),
    email: z.string(),
    phone: z.string(),
    x: z.coerce.number(),
    y: z.coerce.number(),

})
export type UserRegisterScheme = z.infer<typeof userRegisterScheme>


export interface User {
    id: number;
    username: string;
    email: string;
    phone: string,
    x: number,
    y: number
}