import express, { Request, Response } from "express";
import config from "./config";

const app = express();

app.set("port", config.port);

app.use("/", (_request: Request, response: Response) =>
  response.send("Hello, world!")
);

export default app;
