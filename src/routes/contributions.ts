import * as controller from '@/controllers/contributions';
import { getContributionsValidation } from '@/validations/getContributionsValidation';
import { Router } from 'express';

const router = Router();

router.get('/', getContributionsValidation, controller.getContributions);

export default router;
