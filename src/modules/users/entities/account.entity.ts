import { randomUUID } from 'crypto';

export class Account {
  readonly id: string;
  account_balance: number;
  bonus_balance: number;

  constructor() {
    this.id = randomUUID();
  }
}
