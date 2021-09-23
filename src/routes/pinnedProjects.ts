import { Router } from 'express';
import * as controller from '../controllers/pinnedProjects';
import { usernameValidation } from '../validations/usernameValidation';

const router = Router();

router.get('/', usernameValidation, controller.getPinnedProjects);

export default router;
