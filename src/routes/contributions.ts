import * as controller from '@/controllers/contributions';
import { getContributionsValidation } from '@/validations/getContributionsValidation';
import { usernameValidation } from '@/validations/usernameValidation';
import { Router } from 'express';

const router = Router();

router.get('/', getContributionsValidation, controller.getContributions);
router.get('/years', usernameValidation, controller.getYears);

export default router;
