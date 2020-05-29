import { Router } from 'express';
import appointmentRouter from '@modules/appointments/infra/http/routes/appointments.route';
import usersRouter from '@modules/users/infra/http/routes/Users.route';
import sessionsRouter from '@modules/users/infra/http/routes/Sessions.route';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';

const routes = Router();

routes.use('/appointments', appointmentRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export default routes;
