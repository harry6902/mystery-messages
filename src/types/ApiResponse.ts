import { boolean } from 'zod';
import { User, Message } from '../model/User';

export interface ApiResponse{
    success:boolean;
    message: string;
    isAcceptingMessages ?: boolean;
    messages ?: Array<Message>
}