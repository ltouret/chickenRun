import { Controller, Body, Param, UsePipes, ValidationPipe, ParseIntPipe, Get, Post, Patch, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { createChickenDto, patchChickenDto } from './chicken.dto';
import { Chicken } from './chicken.entity';

@Controller('chicken')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getChickens(): Promise<Chicken[]> {
    return this.appService.findAll();
  }

  @Get(':id')
  async getChicken(@Param('id', ParseIntPipe) id : number): Promise<Chicken> {
    const chicken: Promise<Chicken> = this.appService.findOne(id);
    if (await chicken)
      return chicken;
    throw new HttpException('Not found 404', HttpStatus.NOT_FOUND);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false })) // add validation pipes to create chicken DTO?
  async postChicken(@Body() chickenDto: createChickenDto): Promise<Chicken> {
    return this.appService.create(chickenDto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false })) // add validation pipes to create chicken DTO?
  async patchChicken(@Param('id', ParseIntPipe) id : number, @Body() chickenDto: patchChickenDto): Promise<Chicken> {
    const chicken: Promise<Chicken> = this.appService.patch(id, chickenDto);
    if (await chicken)
      return chicken;
    throw new HttpException('Not found 404', HttpStatus.NOT_FOUND);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false }))
  async putChicken(@Param('id', ParseIntPipe) id : number, @Body() chickenDto: createChickenDto): Promise<Chicken> {
    const chicken: Promise<Chicken> = this.appService.put(id, chickenDto);
    if (await chicken)
      return chicken;
    throw new HttpException('Conflict 409', HttpStatus.CONFLICT);
  }

  @Get('/run/:id')
  async runChicken(@Param('id', ParseIntPipe) id : number): Promise<void> {
    const chicken: Promise<void> = this.appService.run(id);
    if (await chicken === null)
      throw new HttpException('Not found 404', HttpStatus.NOT_FOUND);
    return;
  }
}
