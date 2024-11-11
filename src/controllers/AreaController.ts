import { Request, Response } from 'express';
import * as areaService from '../services/AreaService';
import ConsultaOraculo from '../utils/Oraculo';

export const createArea = async (req: Request, res: Response) => {
    const area = await areaService.createArea(req.body);
    res.status(201).json(area);
};

export const getAreas = async (_req: Request, res: Response) => {
    const areas = await areaService.getAreas();
    res.status(200).json(areas);
};

export const getAreaById = async (req: Request, res: Response) => {
    const area = await areaService.getAreaById(req.params.id);
    area ? res.status(200).json(area) : res.status(404).json({ message: 'Area não encontrada' });
};

export const updateArea = async (req: Request, res: Response) => {
    const area = await areaService.updateArea(req.params.id, req.body);
    area ? res.status(200).json(area) : res.status(404).json({ message: 'Area não encontrada' });
};

export const updateAreaProcess = async (req: Request, res: Response) => {
    const area = await areaService.updateArea(req.params.id, req.body);
    area ? res.status(200).json(area) : res.status(404).json({ message: 'Area não encontrada' });
};

export const deleteArea = async (req: Request, res: Response) => {
    const area = await areaService.deleteArea(req.params.id);
    area ? res.status(204).end() : res.status(404).json({ message: 'Area não encontrada' });
};
export const getAreaInfo = async (req: Request, res: Response) => { 
    debugger
    const areas = await ConsultaOraculo(req.body.objAreas[0].processes,req.body.question);
    res.status(200).json(areas);
};

