import mongoose from "mongoose";
import logger from "../utils/logger.js";

export const configure = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/rangogo2024");
    logger.info("🟢 Connected to the rangogo2024");
  } catch (error) {
    logger.error("🔴 Error connecting to the database:", error);
  }
};