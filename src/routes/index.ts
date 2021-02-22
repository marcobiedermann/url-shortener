import { Request, Response, Router } from "express";
import {
  validateCreateUrl,
  validateGetUrl,
} from "../middlewares/validation/url";

const router = Router();

function createUrlHandler(request: Request, response: Response) {
  const { body } = request;

  console.log({ body });


  response.send("POST URL");
}

function getUrlHandler(request: Request, response: Response) {
  const { params } = request;

  console.log({ params });

  response.send("GET URL");
}

router.route("/").post(validateCreateUrl, createUrlHandler);

router.route("/:urlId").get(validateGetUrl, getUrlHandler);

export default router;
