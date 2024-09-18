import usuariosRoutes from "../routes/usuarios.routes.js";
import logger from "../utils/logger.js";

export const register = async (app) => {
  //app.use('/product', productRoutes);
  app.use('/usuarios', usuariosRoutes);
  logger.info("🟢 Routes registered");
};