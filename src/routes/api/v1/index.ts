import { Router } from 'express';
import urlRoutes from './url';

const router = Router();

router.use('/urls', urlRoutes);

export default router;
