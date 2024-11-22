import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProductDto: CreateProductDto) {
    const response = await this.prisma.product.create({
      data: createProductDto,
    });
    return response;
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product)
      throw new NotFoundException(`Product with id ${id} not found`);
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const isExist = await this.findOne(id);
    if (!isExist)
      throw new NotFoundException(`Product with id ${id} not found`);
    return await this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: string) {
    const isExist = await this.findOne(id);
    if (!isExist)
      throw new NotFoundException(`Product with id ${id} not found`);
    await this.prisma.product.delete({ where: { id } });
    return {
      success: true,
      message: 'Deleted successfully',
    };
  }
}
