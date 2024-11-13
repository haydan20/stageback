import { Request, Response } from 'express';
import * as processoService from '../services/ProcessoService';

export const createProcess = async (req: Request, res: Response) => {
    debugger
    const area = await processoService.createProcess(req.body.processT,req.body.areaId);
    res.status(201).json(area);
};

export const getProcesses = async (_req: Request, res: Response) => {
    const areas = await processoService.getProcesses();
    res.status(200).json(areas);
};

export const getProcessById = async (req: Request, res: Response) => {
    const processess = await processoService.getProcessById(req.params.id);
    processess ? res.status(200).json(processess) : res.status(404).json({ message: 'Processo não encontrado' });
};

export const updateProcess = async (req: Request, res: Response) => {
    const {targetProcess} = req.body;
    const processess = await processoService.updateProcess(req.params.id, targetProcess);
    processess ? res.status(200).json(processess) : res.status(404).json({ message: 'Processo não encontrado' });
};

export const addSubprocessToProcess = async (req: Request, res: Response) => {
    const { parentProcessId, subprocess } = req.body;
        const process = await processoService.addSubprocessToProcess(parentProcessId, subprocess);
        res.status(200).json(process);
   
};

export const deleteProcess = async (req: Request, res: Response) => {
    const processess = await processoService.deleteProcess(req.params.id);
    processess ? res.status(204).end() : res.status(404).json({ message: 'Processo não encontrado' });
};



