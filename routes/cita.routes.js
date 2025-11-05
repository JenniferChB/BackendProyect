const express = require("express");
const router = express.Router();
const citaController = require("../controllers/cita.controller");

router.post("/", citaController.createCita);
router.get("/", citaController.getAllCitas);
router.get("/:id", citaController.getCitaById);
router.put("/:id", citaController.updateCita);
router.delete("/:id", citaController.deleteCita);

module.exports = router;
