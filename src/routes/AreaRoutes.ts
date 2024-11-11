import express from 'express';
import * as areaController from '../controllers/AreaController';

const router = express.Router();


router.get('/', areaController.getAreas);
router.get('/:id', areaController.getAreaById);
router.post('/', areaController.createArea);
router.post('/getareasinfo', areaController.getAreaInfo);
router.put('/:id', areaController.updateArea);
router.delete('/:id', areaController.deleteArea);

export default router;
