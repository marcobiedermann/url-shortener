import bodyParser from "body-parser";
import { errors } from "celebrate";
import express from "express";
import config from "./config";
import routes from "./routes";

const app = express();

app.set("port", config.port);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(routes);
app.use(errors());

export default app;
