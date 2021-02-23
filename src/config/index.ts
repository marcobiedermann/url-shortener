import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

interface Database {
  url: string;
}

type Level = 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly';

interface Logger {
  level: Level;
}

interface Config {
  logger: Logger;
  database: Database;
  port: number;
}

const config: Config = {
  database: {
    url: process.env.DATABASE_URL || 'postgres://postgres:example@localhost:5432/postgres',
  },
  logger: {
    level: 'debug',
  },
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
};

export default config;
