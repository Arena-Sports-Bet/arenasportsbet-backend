import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  username: string;
  email: string;
  password: string;
  birthdate: Date;
  cpf: string;
  address: string;
  zipcode: string;
  country: string;
  phone_number: string;
  state: string;
  city: string;

  constructor() {
    this.id = randomUUID();
  }
}
