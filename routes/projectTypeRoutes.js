import express from 'express';
import { consultarTipoProyecto, consultarTodosTipoProyecto, crearTipoProyecto } from '../controllers/projectTypeController';

const router = express.Router();

router.get('/tiposProyecto', consultarTodosTipoProyecto);
router.get('/tiposProyectos:id', consultarTipoProyecto);
router.post('tiposProyecto', crearTipoProyecto);