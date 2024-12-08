import express from 'express'
import cors from 'cors';
import connectDB from './utils/db.js';
import clientRoutes from './routes/clientRoutes.js';
import projectTypeRoutes from './routes/projectTypeRoutes.js'
import stageRoutes from './routes/stageRoutes.js'
import universityRoutes from './routes/universityRoutes.js'

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log('Middleware - Cuerpo de la solicitud:', req.body);
    next();
});
app.use(cors());
const prefijoApi = '/api';
app.use(prefijoApi, clientRoutes);
app.use(prefijoApi, projectTypeRoutes);
app.use(prefijoApi, stageRoutes);
app.use(prefijoApi, universityRoutes);


connectDB();

// Resto de la configuración de Express
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

