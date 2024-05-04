import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../entities/user.entity';
import { UsersRepository } from '../users.repository';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserDto): Promise<User> {
    const user = new User();
    Object.assign(user, data);

    const accountId = uuidv4();

    const newUser = await this.prisma.user.create({
      data: {
        ...user,
        account: {
          create: {
            id: accountId,
            account_balance: 0,
            bonus_balance: 0,
          },
        },
      },
    });

    return plainToInstance(User, newUser);
  }
  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      include: { account: true },
    });
    return plainToInstance(User, users);
  }
  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { account: true },
    });
    return plainToInstance(User, user);
  }
  async update(id: string, data: UpdateUserDto): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { ...data },
      include: { account: true },
    });
    return plainToInstance(User, user);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return plainToInstance(User, user);
  }
}
