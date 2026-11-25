import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './products/product.module';
import { EmployeeModule } from './employees/employee.module';
@Module({ imports: [
  TypeOrmModule.forRoot({ type: 'sqlite', database: process.env.DB_PATH || './database.sqlite',
    autoLoadEntities: true, synchronize: true }),
  ProductModule, EmployeeModule,
]})
export class AppModule {}
