import { Body, Controller, Get, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
@Controller('jobs')
export class JobsController {
  constructor(private readonly service: JobsService) {}
  @Post() create(@Body() dto: CreateJobDto) { return this.service.create(dto); }
  @Get() findAll() { return this.service.findAll(); }
}
