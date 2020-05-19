import { Router } from 'express';
import appointmentRouter from '@modules/appointments/infra/http/routes/appointments.route';
import usersRouter from '@modules/users/infra/http/routes/users.route';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.route';

const routes = Router();

routes.use('/appointments', appointmentRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
