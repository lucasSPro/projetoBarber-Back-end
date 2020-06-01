import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersControllers from '../controllers/ProvidersContollers';

const providersRouter = Router();
const providersControllers = new ProvidersControllers();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersControllers.index);

export default providersRouter;
