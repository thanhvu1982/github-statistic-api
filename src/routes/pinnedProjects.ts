import * as controller from '@/controllers/pinnedProjects';
import { usernameValidation } from '@/validations/usernameValidation';
import { Router } from 'express';

const router = Router();

router.get('/', usernameValidation, controller.getPinnedProjects);

export default router;
