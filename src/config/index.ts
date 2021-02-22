import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

type Level = 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly';

interface Logger {
  level: Level;
}

interface Config {
  logger: Logger;
  port: number;
}

const config: Config = {
  logger: {
    level: 'debug',
  },
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
};

export default config;
