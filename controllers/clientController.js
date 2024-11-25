import Client from "../models/client.js"

export const consultarCliente = async (req, res) => {
    try {
        const cliente = await Client.findById(req.params.id);
        if (cliente) {
            res.status(200).json(cliente)
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener cliente' })
    }
}

export const consultarClientes = async (req, res) => {
    try {
        const clientes = await Client.find();
        if (clientes) {
            res.status(200).json(clientes)
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener los clientes' })
    }
}

export const crearCliente = async (req, res) => {
    try {
        const fechaActual = new Date()
        const cliente = new Client({ name: req.body.name, email: req.body.email, creationDate: fechaActual, updateDate: fechaActual });
        await cliente.save();
        res.status(201).json({ message: 'Nuevo cliente creado', cliente });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const actualizarCliente = async (req, res) => {
    try {
        const cliente = Client.findById(req.params.id)
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        cliente.name = req.body.name;
        cliente.email = req.body.email;
        tipoProyecto.updateDate = new Date();
        const clienteActualizado = await tipoProyecto.save();
        res.status(200).json(clienteActualizado);
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener tipo de proyecto' });
    }
}