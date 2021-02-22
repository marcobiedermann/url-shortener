import { Request, Response, Router } from "express";

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

router.route("/").post(createUrlHandler);

router.route("/:urlId").get(getUrlHandler);

export default router;
