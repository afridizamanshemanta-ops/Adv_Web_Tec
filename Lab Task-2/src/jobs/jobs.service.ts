import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';
import { CreateJobDto } from './dto/create-job.dto';
@Injectable()
export class JobsService {
  constructor(@InjectRepository(Job) private repo: Repository<Job>) {}
  create(dto: CreateJobDto) { return this.repo.save(this.repo.create(dto)); }
  findAll() { return this.repo.find({ order: { id: 'ASC' } }); }
}
