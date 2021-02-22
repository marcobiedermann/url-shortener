import bodyParser from "body-parser";
import { errors } from "celebrate";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config";
import routes from "./routes";
import { stream } from "./utils/logger";

const app = express();

app.set("port", config.port);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(helmet());
app.use(
  morgan("combined", {
    stream,
  })
);
app.use(routes);
app.use(errors());

export default app;
