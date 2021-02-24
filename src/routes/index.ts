import { Request, Response, Router } from 'express';
import asyncHandler from 'express-async-handler';
import { validateCreateUrl, validateGetUrl } from '../middlewares/validation/url';
import { createUrl, getUrl } from '../services/url';

const router = Router();

async function createUrlHandler(request: Request, response: Response) {
  const { body } = request;

  const createdUrl = await createUrl(body);

  response.json({
    url: createdUrl,
  });
}

async function getUrlHandler(request: Request, response: Response) {
  const { params } = request;
  const { shortUrl } = params;

  const url = await getUrl({
    shortUrl,
  });

  response.json({
    url,
  });
}

router.route('/').post(validateCreateUrl, asyncHandler(createUrlHandler));

router.route('/:shortUrl').get(validateGetUrl, asyncHandler(getUrlHandler));

export default router;
