import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/entities/user.entity';
import { Job } from './jobs/entities/job.entity';
import { Application } from './applications/entities/application.entity';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { ApplicationsModule } from './applications/applications.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres', host: process.env.DB_HOST || 'localhost', port: Number(process.env.DB_PORT || 5432),
      username: process.env.DB_USERNAME || 'postgres', password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_DATABASE || 'jobconnect_lab', entities: [User, Job, Application],
      synchronize: false, autoLoadEntities: true,
    }),
    UsersModule, JobsModule, ApplicationsModule,
  ],
})
export class AppModule {}
