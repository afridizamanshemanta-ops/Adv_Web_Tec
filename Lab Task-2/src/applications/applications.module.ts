import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from './entities/application.entity';
import { User } from '../users/entities/user.entity';
import { Job } from '../jobs/entities/job.entity';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
@Module({ imports: [TypeOrmModule.forFeature([Application, User, Job])], providers: [ApplicationsService], controllers: [ApplicationsController] })
export class ApplicationsModule {}
