import { IProcess } from '../interfaces/ProcessInterface';
import {  Document } from 'mongoose';

export interface IArea extends Document {
    name: string;
    description?: string;
    processes: IProcess['_id'][];
}