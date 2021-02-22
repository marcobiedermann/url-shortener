import winston from "winston";
import config from "../config";

const logger = winston.createLogger({
  level: config.logger.level,
  format: winston.format.json(),
  defaultMeta: {
    service: "url-shortener",
  },
  transports: [
    new winston.transports.File({
      filename: "combined.log",
    }),
  ],
});

const stream = {
  write: (message: string): void => {
    logger.info(message);
  },
};

export default logger;

export { stream };
