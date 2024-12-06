import Stage from "../models/stage.js"

export const consultarEtapa = async (req, res) => {
    try {
        const etapa = await Stage.findById(req.params.id);
        if (etapa) {
            res.status(200).json(etapa)
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener etapa' })
    }
}

export const consultarEtapas = async (req, res) => {
    try {
        const etapas = await Stage.find();
        if (etapas) {
            res.status(200).json(etapas)
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener las etapas' })
    }
}

export const crearEtapa = async (req, res) => {
    try {
        const fechaActual = new Date()
        const etapa = new Stage({ name: req.body.name, creationDate: fechaActual, updateDate: fechaActual });
        await etapa.save();
        res.status(201).json({ message: 'Nueva etapa creada', etapa });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const actualizarEtapa = async (req, res) => {
    try {
        const etapa = await Stage.findById(req.params.id)
        if (!etapa) {
            return res.status(404).json({ error: 'Etapa no encontrada' });
        }
        if (req.body.name) etapa.name = req.body.name;
        etapa.updateDate = new Date();
        const etapaActualizada = await etapa.save();
        res.status(200).json(etapaActualizada);
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener la etapa', ex: error });
    }
}