import { Router } from 'express';
import appointmentRouter from './appointments.route';
import usersRouter from './users.route';
import sessionsRouter from './sessions.route';

const routes = Router();

routes.use('/appointments', appointmentRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
