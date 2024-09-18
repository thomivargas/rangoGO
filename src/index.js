import App from "./app.js";
import logger from "./utils/logger.js";
 
const app = App;
app.listen(app.get('port'), () => {
  logger.info(`🟢 App listening on the port ${app.get('port')}`);
});