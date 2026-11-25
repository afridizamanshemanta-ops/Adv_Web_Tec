import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from '../users/entities/user.entity';
import { Job } from '../jobs/entities/job.entity';
import { Application } from '../applications/entities/application.entity';
dotenv.config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'jobconnect_lab',
  entities: [User, Job, Application],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
  logging: false,
});
