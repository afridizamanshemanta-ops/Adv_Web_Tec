import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './entities/application.entity';
import { User } from '../users/entities/user.entity';
import { Job } from '../jobs/entities/job.entity';
import { CreateApplicationDto } from './dto/create-application.dto';
@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application) private repo: Repository<Application>,
    @InjectRepository(User) private users: Repository<User>,
    @InjectRepository(Job) private jobs: Repository<Job>,
  ) {}
  async create(dto: CreateApplicationDto) {
    const user = await this.users.findOne({ where: { id: dto.userId } });
    if (!user) throw new NotFoundException(`User ${dto.userId} not found`);
    const job = await this.jobs.findOne({ where: { id: dto.jobId } });
    if (!job) throw new NotFoundException(`Job ${dto.jobId} not found`);
    return this.repo.save(this.repo.create(dto));
  }
  findAll() { return this.repo.find({ relations: { user: true, job: true }, order: { id: 'ASC' } }); }
}
