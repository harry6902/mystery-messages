import {z} from 'zod';

export const messageSchema= z.object({
    content:z
    .string()
    .min(10,{message:'content must be more than 10 letters'})
    .max(300,{message:'Content cannot be more than 300 characters'}) 
})