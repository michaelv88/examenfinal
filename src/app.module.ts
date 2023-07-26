import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './product.entity';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.appService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number): Promise<Product> {
    return this.appService.getProductById(id);
  }

  @Post()
  async createProduct(@Body() productData: Product): Promise<Product> {
    return this.appService.createProduct(productData);
  }

  @Put(':id')
  async updateProduct(@Param('id') id: number, @Body() productData: Product): Promise<Product> {
    return this.appService.updateProduct(id, productData);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    return this.appService.deleteProduct(id);
  }
}