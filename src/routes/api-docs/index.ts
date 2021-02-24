/* eslint-disable @typescript-eslint/no-var-requires */

import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

const router = Router();

router.use('/', swaggerUi.serve, swaggerUi.setup(require('../../../public/openapi.json')));

export default router;
