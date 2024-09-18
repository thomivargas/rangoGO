import express from "express";
import * as database from "./config/database.js";
import * as routes from "./config/routes.js";
import errorHandler from "./middlewares/error.handler.js";

// inicialization
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Connect to the database
database.configure();

// Settings
app.set("port", process.env.PORT || 3000);

// Routes
routes.register(app);

// Error Handler
app.use(errorHandler);

export default app;