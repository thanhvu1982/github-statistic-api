import { Router } from 'express';
import * as controller from '../controllers/home';

const router = Router();

router.get('/', controller.index);

export default router;
