import { Request, Response, Router } from 'express';
import asyncHandler from 'express-async-handler';
import { validateGetUrl } from '../middlewares/validation/url';
import { getUrl } from '../services/url';
import apiRoutes from './api';

const router = Router();

async function getUrlHandler(request: Request, response: Response) {
  const { params } = request;
  const { shortUrl } = params;

  const url = await getUrl({
    shortUrl,
  });

  response.redirect(url.longUrl);
}

router.route('/:shortUrl').get(validateGetUrl, asyncHandler(getUrlHandler));
router.use('/api', apiRoutes);

export default router;
