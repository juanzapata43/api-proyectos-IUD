import ProjectType from "../models/projectType.js"

export const consultarTipoProyecto = async (req, res) => {
    try {
        const tipoProyecto = await ProjectType.findById(req.params.id);
        if (!tipoProyecto) {
            return res.status(404).json({ error: 'Tipo de proyecto no encontrado' });
        }

        res.status(200).json(tipoProyecto)

    } catch (error) {
        res.status(400).json({ error: 'Error al obtener tipos de proyecto' })
    }
}

export const consultarTodosTipoProyecto = async (req, res) => {
    try {
        const tiposProyecto = await ProjectType.find();
        if (tiposProyecto) {
            res.status(200).json(tiposProyecto)
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener tipo de proyecto' })
    }
}

export const crearTipoProyecto = async (req, res) => {
    try {
        const tipoProyecto = new ProjectType({ name: req.body.name, creationDate: Date.now(), updateDate: Date.now() });
        await tipoProyecto.save();
        res.status(201).json({ message: 'Nuevo tipo de proyecto creado', tipoProyecto });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const actualizarTipoProyecto = async (req, res) => {
    try {
        if (!tipoProyecto) {
            return res.status(404).json({ error: 'Tipo de proyecto no encontrado' });
        }
        tipoProyecto.name = req.body.name;
        tipoProyecto.updateDate = new Date();
        const updatedTipoProyecto = await tipoProyecto.save();
        res.status(200).json(updatedTipoProyecto);
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener tipo de proyecto' });
    }
}