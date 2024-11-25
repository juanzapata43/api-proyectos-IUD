import express from 'express';
import { consultarTipoProyecto, consultarTodosTipoProyecto, crearTipoProyecto, actualizarTipoProyecto } from '../controllers/projectTypeController.js';

const router = express.Router();

router.get('/tiposProyecto', consultarTodosTipoProyecto);
router.get('/tiposProyecto/:id', consultarTipoProyecto);
router.post('/tiposProyecto', crearTipoProyecto);
router.put('/tiposProyecto/:id', actualizarTipoProyecto)

export default router;