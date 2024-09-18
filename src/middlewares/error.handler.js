import logger from "../utils/logger.js";

const errorHandler = (err, req, res, next
) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  logger.error(`Error ${status} - ${message}`);

  return res.status(status).json({
    status,
    message,
  });
};
export default errorHandler;