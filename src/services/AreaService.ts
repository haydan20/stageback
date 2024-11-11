// src/services/areaService.ts
import Area from '../models/Area';
import { IArea } from '../interfaces/AreasInterface';

export const createArea = async (data: Partial<IArea>): Promise<IArea> => {
    const area = new Area(data);
    return await area.save();
};

export const getAreas = async (): Promise<IArea[]> => {
    return await Area.find()
        .populate({
            path: 'processes',
            populate: {
                path: 'subprocesses',
                model: 'Process',
                populate: {
                    path: 'subprocesses',
                    model: 'Process',
                    populate: {
                        path: 'subprocesses',
                        model: 'Process',
                        populate: {
                            path: 'subprocesses',
                            model: 'Process',
                        },
                    },
                },
            },
        });
};

export const getAreaById = async (id: string): Promise<IArea | null> => {
    return await Area.findById(id);
};

export const updateArea = async (id: string, data: Partial<IArea>): Promise<IArea | null> => {
    return await Area.findByIdAndUpdate(id, data, { new: true });
};

export const updateAreaProcess = async (idArea: string, idProcess: string): Promise<IArea | null> => {
    try {
     
        const area = await Area.findById(idArea);
        if (!area) {
            throw new Error('Área não encontrada');
        }

        if (!area.processes.includes(idProcess)) {
            area.processes.push(idProcess);
        }
        await area.save();
        return area.populate('processes');
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao atualizar a área com o processo');
    }
};

export const deleteArea = async (id: string): Promise<IArea | null> => {
    return await Area.findByIdAndDelete(id);
};
