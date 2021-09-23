import * as controller from '@/controllers/contributions';
import { getContributionsValidation } from '@/validations/getContributionsValidation';
import { getYearsValidation } from '@/validations/getYearsValidation';
import { Router } from 'express';

const router = Router();

router.get('/', getContributionsValidation, controller.getContributions);
router.get('/years', getYearsValidation, controller.getYears);

export default router;
