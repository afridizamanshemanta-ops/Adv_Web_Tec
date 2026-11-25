import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  async create(dto: CreateUserDto) {
    if (await this.repo.findOne({ where: { email: dto.email } })) throw new ConflictException('Email already exists');
    return this.repo.save(this.repo.create(dto));
  }
  findAll() { return this.repo.find({ order: { id: 'ASC' } }); }
}
