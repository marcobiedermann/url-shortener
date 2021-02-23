import { Request, Response, Router } from 'express';
import { validateCreateUrl, validateGetUrl } from '../middlewares/validation/url';
import { createUrl, getUrl } from '../services/url';

const router = Router();

async function createUrlHandler(request: Request, response: Response) {
  const { body } = request;

  console.log({ body });

  const createdUrl = await createUrl();

  response.json({
    url: createdUrl,
  });
}

async function getUrlHandler(request: Request, response: Response) {
  const { params } = request;
  const { urlId } = params;

  console.log({ params });

  const url = await getUrl({
    id: urlId,
  });

  response.json({
    url,
  });
}

router.route('/').post(validateCreateUrl, createUrlHandler);

router.route('/:urlId').get(validateGetUrl, getUrlHandler);

export default router;
