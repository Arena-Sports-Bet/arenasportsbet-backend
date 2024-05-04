import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';
import { Account } from './account.entity';

export class User {
  readonly id: string;
  username: string;
  email: string;

  @Exclude()
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
