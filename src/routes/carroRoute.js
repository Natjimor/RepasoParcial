const express = require('express');
const router = express.Router();
const z = require('zod');

// Importar db y esquema ZOD
const {carros, usuarios, correos, carrosvendidos} = require('../database/db.js');
const schemaCarrito = require('../schemas/carritosZod.js');

// obtener todos los usuarios
router.get('/', (req, res) => {
    res.send(carros);
    
});

// Ruta para obtener por id 
router.get('/:id', (req, res) => {
    const id = req.params.id
    const carro = carros.find(c => c.id === id);
    if (carro) {
        res.status(200).json(carro);
    } else {
        res.status(404).send('Canción no encontrada');
    }
});

//Ruta para crear un nuevo carro

router.post('/', (req, res) => {
    const nuevoCarro = req.body;
    const carroSquema = schemaCarrito.safeParse(nuevoCarro);

    if (carroSquema.success) {
        const idExistente = carros.some(c => c.id === nuevoCarro.id);

        if (idExistente) {
            res.status(400).json({ error: 'El ID del carro ya está en uso' });
        } else {
            const nuevoCarroConId = {
                ...carroSquema.data
            };
            carros.push(nuevoCarroConId);
            res.status(201).json({ message: 'Carro creado satisfactoriamente', carro: nuevoCarroConId });
        }
    } else {
        res.status(400).json({ error: carroSquema.error });
    }
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const datosActualizados = req.body;

    // Encuentra el carro con el ID dado en la base de datos
    const carroIndex = carros.findIndex(c => c.id === id);

    if (carroIndex !== -1) {
        // Actualiza los datos del carro con los nuevos datos proporcionados
        carros[carroIndex] = {
            ...carros[carroIndex],
            ...datosActualizados
        };

        res.status(200).json(carros[carroIndex]);
    } else {
        res.status(404).send('Carro no encontrado');
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    // Buscar el índice del carro en el array de carros
    const carroIndex = carros.findIndex(c => c.id === id);

    // Verificar si se encontró el carro
    if (carroIndex !== -1) {
        // Eliminar el carro del array de carros
        carros.splice(carroIndex, 1);
        res.status(200).send('Carro eliminado exitosamente');
    } else {
        res.status(404).send('Carro no encontrado');
    }
});

// Obtener todos los carros o filtrar por modelo
router.get('/', (req, res) => {
    const modelo = req.query.modelo; // Obtener el parámetro de consulta modelo
    let carrosFiltrados = carros; // Inicialmente, todos los carros

    // Filtrar carros por modelo si se proporciona el parámetro modelo
    if (modelo) {
        carrosFiltrados = carrosFiltrados.filter(carro => carro.detalles.modelo.toLowerCase() === modelo.toLowerCase());
    }

    res.status(200).json(carrosFiltrados);
});


router.delete('/', (req, res) => {
    carros.splice(0, carros.length); // Eliminar todos los carros
    res.status(204).end(); // Respuesta exitosa sin contenido
});

module.exports = router;
