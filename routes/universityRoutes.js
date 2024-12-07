import express from 'express';
import { consultarUniversidades, consultarUniversidad, crearUniversidad, actualizarUniversidad } from '../controllers/universityController.js';

const router = express.Router();

router.get('/universidades', consultarUniversidades);
router.get('/universidades/:id', consultarUniversidad);
router.post('/universidades', crearUniversidad);
router.put('/universidades/:id', actualizarUniversidad)

export default router;