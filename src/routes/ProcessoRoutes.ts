import express from 'express';
import * as processoController from '../controllers/ProcessoController';

const router = express.Router();

router.get('/:id', processoController.getProcessById);
router.get('/', processoController.getProcesses);
router.post('/addSubprocessToProcess', processoController.addSubprocessToProcess);
router.post('/', processoController.createProcess);
router.put('/:id', processoController.updateProcess);
router.delete('/:id', processoController.deleteProcess);


export default router;
