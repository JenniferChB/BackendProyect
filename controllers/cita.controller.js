const Cita = require("../models/cita.model");

exports.createCita = async (req, res) => {
  try {
    const nuevaCita = new Cita(req.body);
    const citaGuardada = await nuevaCita.save();
    res.status(201).json(citaGuardada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllCitas = async (req, res) => {
  try {
    const citas = await Cita.find();
    res.status(200).json(citas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCitaById = async (req, res) => {
  try {
    const cita = await Cita.findById(req.params.id);
    if (!cita) return res.status(404).json({ error: "Cita no encontrada" });
    res.status(200).json(cita);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCita = async (req, res) => {
  try {
    const citaActualizada = await Cita.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!citaActualizada)
      return res.status(404).json({ error: "Cita no encontrada" });
    res.status(200).json(citaActualizada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCita = async (req, res) => {
  try {
    const citaEliminada = await Cita.findByIdAndDelete(req.params.id);
    if (!citaEliminada)
      return res.status(404).json({ error: "Cita no encontrada" });
    res.status(200).json({ message: "Cita eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
