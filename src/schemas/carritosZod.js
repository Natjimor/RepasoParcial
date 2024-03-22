const z = require('zod');

const detallesSchema = z.object({
  pasajeros: z.number(),
  modelo: z.string(),
  color: z.string()
});

const schemaCarrito = z.object({
  nombre: z.string(),
  año_salida: z.number(),
  id: z.string(),
  detalles: detallesSchema
});

module.exports = schemaCarrito;