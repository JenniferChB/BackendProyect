const express = require("express");
const router = express.Router();
const citaController = require("../controllers/cita.controller");

router.post("/citas", citaController.createCita);
router.get("/citas", citaController.getAllCitas);
router.get("/citas/:id", citaController.getCitaById);
router.put("/citas/:id", citaController.updateCita);
router.delete("/citas/:id", citaController.deleteCita);

module.exports = router;
