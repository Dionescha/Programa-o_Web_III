import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import UserEntity from '../models/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import UsersOutput from '../models/dto/output/users.output';
import UsersConverter from '../models/converters/users.converter';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private readonly usersConverter: UsersConverter,
  ) {}

  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: number) {
    const UserEntity = await this.userRepo.findOne({ where: { id: id } });

    const output = this.usersConverter.entityToOutput(UserEntity);
    return output;
  }

  async updateName(id: number, name: string) {
    const UserEntity = await this.userRepo.findOne({ where: { id } });

    UserEntity.username = name;

    const userSaved = await this.userRepo.save(UserEntity);
    const output = this.usersConverter.entityToOutput(userSaved);
    return output;
  }
}

// remove(id: number) {//
//return this.userRepo.remove();//
