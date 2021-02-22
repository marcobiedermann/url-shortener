
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

interface Config {
  port: number;
}

const config: Config = {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
};

export default config;
