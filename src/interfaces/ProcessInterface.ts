import {  Document } from 'mongoose';

export interface IProcess extends Document {
    name: string;
    subprocesses: IProcess[];
    tools: string;
    responsible: string;
    documentation: string;
    isSystemic: boolean;
}
