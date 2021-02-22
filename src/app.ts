import { errors } from "celebrate";
import express from "express";
import config from "./config";
import routes from "./routes";

const app = express();

app.set("port", config.port);

app.use(routes);
app.use(errors());

export default app;
