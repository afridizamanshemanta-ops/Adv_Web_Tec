import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(Employee) private repo: Repository<Employee>) {}
  async create(dto: CreateEmployeeDto) {
    try { return await this.repo.save(this.repo.create(dto)); }
    catch (e) { if (e instanceof QueryFailedError) throw new ConflictException('Employee email may already exist'); throw e; }
  }
  findAll() { return this.repo.find({ order: { id: 'ASC' } }); }
  async findOne(id: number) {
    const item = await this.repo.findOneBy({ id });
    if (!item) throw new NotFoundException(`Employee with ID ${id} not found`);
    return item;
  }
  async update(id: number, dto: UpdateEmployeeDto) {
    const item = await this.findOne(id); Object.assign(item, dto);
    try { return await this.repo.save(item); }
    catch (e) { if (e instanceof QueryFailedError) throw new ConflictException('Employee email may already exist'); throw e; }
  }
  async remove(id: number) {
    const item = await this.findOne(id); await this.repo.remove(item);
    return { message: `Employee with ID ${id} deleted successfully` };
  }
}
