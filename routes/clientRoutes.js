import express from 'express';
import { consultarCliente, consultarClientes, crearCliente, actualizarCliente } from '../controllers/clientController.js';

const router = express.Router();

router.get('/clientes', consultarClientes);
router.get('/clientes/:id', consultarCliente);
router.post('/clientes', crearCliente);
router.put('/clientes/:id', actualizarCliente)

export default router;