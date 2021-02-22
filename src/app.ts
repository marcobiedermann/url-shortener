import express from "express";
import config from "./config";
import routes from "./routes";

const app = express();

app.set("port", config.port);

app.use(routes);

export default app;
