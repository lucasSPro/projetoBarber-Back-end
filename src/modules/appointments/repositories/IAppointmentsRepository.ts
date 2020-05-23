import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointementDTO from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointementDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
