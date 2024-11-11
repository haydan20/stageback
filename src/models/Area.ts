import mongoose, {  Schema } from 'mongoose';
import {IArea} from '../interfaces/AreasInterface';
const AreaSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    processes: [{
        type: Schema.Types.ObjectId,
        ref: 'Process',
    }],
});

export default mongoose.model<IArea>('Area', AreaSchema);
