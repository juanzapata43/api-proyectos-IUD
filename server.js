import express from 'express'
import cors from 'cors';
import connectDB from './utils/db.js';
import projectTypeRoutes from './routes/projectTypeRoutes.js'
import clientRoutes from './routes/clientRoutes.js';

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log('Middleware - Cuerpo de la solicitud:', req.body);
    next();
});
app.use(cors());
const prefijoApi = '/api';
app.use(prefijoApi, projectTypeRoutes);
app.use(prefijoApi, clientRoutes);

connectDB();

// Resto de la configuración de Express
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

