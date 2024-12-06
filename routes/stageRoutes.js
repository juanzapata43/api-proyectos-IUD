import express from 'express';
import { consultarEtapas, consultarEtapa, crearEtapa, actualizarEtapa } from '../controllers/stageController.js';

const router = express.Router();

router.get('/etapas', consultarEtapas);
router.get('/etapas/:id', consultarEtapa);
router.post('/etapas', crearEtapa);
router.put('/etapas/:id', actualizarEtapa)

export default router;