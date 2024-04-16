import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

export abstract class UsersRepository {
  abstract create(data: CreateUserDto): Promise<User> | User;
  abstract findAll(): Promise<User[]> | [];
  abstract findOne(id: string): Promise<User> | User;
  abstract update(id: string, data: UpdateUserDto): Promise<User> | User;
  abstract delete(id: string): Promise<void> | void;
  abstract findByEmail(email: string): Promise<User | undefined> | User;
}

class Users implements UsersRepository {
  findByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  create(data: CreateUserDto): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<User[]> | [] {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: UpdateUserDto): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): void | Promise<void> {
    throw new Error('Method not implemented.');
  }
}
