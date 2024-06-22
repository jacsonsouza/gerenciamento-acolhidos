import { Status } from '../enums/appointment/status';

export interface Appointment {
  id: number;
  name: string;
  last_name: string;
  cpf: string;
  mother_name: string;
  date: Date;
  time: Date;
  state: string;
  city: string;
  phone: string;
  observation: string;
  status: Status;
}
