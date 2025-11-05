const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const citaRoutes = require("./routes/cita.routes");

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8081;
    this.middlewares();
    this.routes();
    this.databaseConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send("Servidor funcionando correctamente 🚀");
    });

    this.app.use("/citas", citaRoutes);
  }

  async databaseConnection() {
    await connectDB();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`✅ Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

module.exports = App;
