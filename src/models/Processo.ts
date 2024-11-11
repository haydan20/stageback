import mongoose, { Schema } from 'mongoose';
import { IProcess } from '../interfaces/ProcessInterface';

const ProcessSchema: Schema = new Schema({
    name: { type: String, required: true },
    subprocesses: [{ type: Schema.Types.ObjectId, ref: 'Process' }], 
    tools: { type: String, required: false },
    responsible: { type: String, required: false },
    documentation: { type: String, required: false }, 
    isSystemic: { type: Boolean, required: true }
});

export default mongoose.model<IProcess>('Process', ProcessSchema);
