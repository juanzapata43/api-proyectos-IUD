import express from 'express'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log('Middleware - Cuerpo de la solicitud:', req.body);
    next();
});
app.use(cors());

// Resto de la configuración de Express
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

