const mongoose = require("mongoose");

const CitaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  fecha: { type: Date, required: true },
  hora: { type: String, required: true },
  descripcion: { type: String },
});

module.exports = mongoose.model("Cita", CitaSchema);
