import Process from '../models/Processo';
import { IProcess } from '../interfaces/ProcessInterface';
import { updateAreaProcess } from './AreaService';

export const createProcess = async (data: Partial<IProcess>, areaId : String): Promise<any> => {
    debugger
    delete data._id;
    const process = new Process(data);
    const saveProcess : IProcess = await process.save();
    const processIdString = (saveProcess._id as string).toString();
    const ret = await updateAreaProcess(areaId.toString(),processIdString);
    console.log(ret);
    return ret;
   
};
export const getProcesses = async (): Promise<IProcess[]> => {
    return await Process.find()
        .populate('area')
        .populate({
            path: 'subprocesses',
            populate: {
                path: 'subprocesses', 
            },
        });
};

export const getProcessById = async (id: string): Promise<IProcess | null> => {
    return await Process.findById(id).populate('area');
};

export const updateProcess = async (id: string, data: Partial<IProcess>): Promise<IProcess | null> => {
    return await Process.findByIdAndUpdate(id, data, { new: true });
};

export const addSubprocessToProcess = async (processId: string, newsubprocess: IProcess): Promise<IProcess | null> => {

    const process = await Process.findById(processId);

    if (!process) {
        throw new Error('Processo principal não encontrado');
    }

    delete newsubprocess._id;
    const subprocess = new Process(newsubprocess);
    const saveProcess : IProcess = await subprocess.save();
    
   
    process.subprocesses.push(saveProcess);

    
    await process.save();

     return saveProcess;
};

export const deleteProcess = async (id: string): Promise<IProcess | null> => {
    return await Process.findByIdAndDelete(id);
};


