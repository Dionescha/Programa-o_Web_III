import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import UserEntity from '../models/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import UsersOutput from '../models/dto/output/users.output';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: number): Promise<UsersOutput> {
    const UserEntity = await this.userRepo.findOne({ where: { id } });

    const userOutput = new UsersOutput();
    userOutput.id = UserEntity.id;
    userOutput.name = UserEntity.username;
    userOutput.active = UserEntity.active;
    userOutput.createdAt = UserEntity.createdAt;
    userOutput.updatedAt = UserEntity.updatedAt;
    return userOutput;
  }

  async updateName(id: number, name: string) {
    const UserEntity = await this.userRepo.findOne({ where: { id } });

    UserEntity.username = name;

    const userSaved = await this.userRepo.save(UserEntity);
    const userOutput = new UsersOutput();
    userOutput.id = userSaved.id;
    userOutput.name = userSaved.username;
    userOutput.active = userSaved.active;
    userOutput.createdAt = userSaved.createdAt;
    userOutput.updatedAt = userSaved.updatedAt;
    return userOutput;
  }
}

// remove(id: number) {//
//return this.userRepo.remove();//
