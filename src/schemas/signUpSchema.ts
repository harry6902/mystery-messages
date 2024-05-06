import {z} from 'zod';

export const usernameValidation= z
     .string()
     .min(2,"Username is atleast 2 letters")
     .max(20,"Username must no more be more than 20 letters")
     .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain Special Characters")

     export const signUpSchema=z.object({
        username:usernameValidation,
        email:z.string().email({message:'Invalid email address'}),
        password:z.string().min(6,{message:'Password must be atleast 6 characters'})
     })