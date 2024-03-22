/**
 * The database is a simple array of objects. Each object is a record in the database.
 */
const carros = [
    {
        "nombre": "Toyota Corolla",
        "año_salida": 2021,
        "id": "TCO001",
        "detalles": {
            "pasajeros": 5,
            "modelo": "Sedan",
            "color": "Negro"
        }
    },
    {
        "nombre": "Ford Mustang",
        "año_salida": 2020,
        "id": "FMS002",
        "detalles": {
            "pasajeros": 4,
            "modelo": "Deportivo",
            "color": "Azul"
        }
    },
    {
        "nombre": "Chevrolet Tahoe",
        "año_salida": 2019,
        "id": "CTA003",
        "detalles": {
            "pasajeros": 8,
            "modelo": "SUV",
            "color": "Blanco"
        }
    },
    {
        "nombre": "Volkswagen Golf",
        "año_salida": 2022,
        "id": "VGO004",
        "detalles": {
            "pasajeros": 5,
            "modelo": "Hatchback",
            "color": "Gris"
        }
    },
    {
        "nombre": "BMW X5",
        "año_salida": 2023,
        "id": "BXF005",
        "detalles": {
            "pasajeros": 5,
            "modelo": "SUV",
            "color": "Negro"
        }
    },
    {
        "nombre": "Audi A4",
        "año_salida": 2020,
        "id": "AAA006",
        "detalles": {
            "pasajeros": 5,
            "modelo": "Sedan",
            "color": "Plata"
        }
    },
    {
        "nombre": "Mercedes-Benz E-Class",
        "año_salida": 2021,
        "id": "MBE007",
        "detalles": {
            "pasajeros": 5,
            "modelo": "Sedan",
            "color": "Negro"
        }
    },
    {
        "nombre": "Tesla Model S",
        "año_salida": 2022,
        "id": "TMS008",
        "detalles": {
            "pasajeros": 5,
            "modelo": "Eléctrico",
            "color": "Blanco"
        }
    },
    {
        "nombre": "Hyundai Sonata",
        "año_salida": 2019,
        "id": "HSO009",
        "detalles": {
            "pasajeros": 5,
            "modelo": "Sedan",
            "color": "Rojo"
        }
    },
    {
        "nombre": "Kia Sportage",
        "año_salida": 2020,
        "id": "KSP010",
        "detalles": {
            "pasajeros": 5,
            "modelo": "SUV",
            "color": "Plateado"
        }
    }
];

const usuarios = [];
const correos = [];
const carrosvendidos = [];

module.exports = {usuarios, correos, carrosvendidos, carros};
