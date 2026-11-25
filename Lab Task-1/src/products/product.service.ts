import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private repo: Repository<Product>) {}
  create(dto: CreateProductDto) { return this.repo.save(this.repo.create(dto)); }
  findAll() { return this.repo.find({ order: { id: 'ASC' } }); }
  async findOne(id: number) {
    const item = await this.repo.findOneBy({ id });
    if (!item) throw new NotFoundException(`Product with ID ${id} not found`);
    return item;
  }
  async update(id: number, dto: UpdateProductDto) {
    const item = await this.findOne(id); Object.assign(item, dto); return this.repo.save(item);
  }
  async remove(id: number) {
    const item = await this.findOne(id); await this.repo.remove(item);
    return { message: `Product with ID ${id} deleted successfully` };
  }
}
