import ProjectType from "../models/projectType"


export const consultarTipoProyecto = async (req, res) => {
    try {
        const tipoProyecto = await ProjectType.findById(req.params.id);
        if (tipoProyecto) {
            res.status(200).json(tipoProyecto)
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener tipo de proyecto' })
    }
}

export const consultarTodosTipoProyecto = async (res) => {
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
        const projectType = new ProjectType({ name: 'Essay' });
        await projectType.save();
        res.status(201).json({ message: 'Test project type created successfully!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}