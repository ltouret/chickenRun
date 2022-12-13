import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createChickenDto, patchChickenDto} from './chicken.dto';
import { Chicken } from './chicken.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Chicken)
    private readonly chickenRepository: Repository<Chicken>,
  ) {}

  async findAll(): Promise<Chicken[]> {
    const chickens: Chicken[] = await this.chickenRepository.find();
    return chickens;
  }

  async findOne(id: number): Promise<Chicken> {
    const chicken: Chicken = await this.chickenRepository.findOne({where : {id : id}});
    if (chicken === null)
      return null;
    return chicken;
  }

  async create(chickenDto : createChickenDto): Promise<Chicken> {
    const chicken: Chicken = this.chickenRepository.create({
      ...chickenDto,
    });
    if (chickenDto.birthday === undefined)
      chicken.birthday = new Date();
    return this.chickenRepository.save(chicken);
  }

  async patch(id: number, chickenDto: patchChickenDto): Promise<Chicken> {
    const updated_chicken: Chicken = await this.findOne(id);
    if (updated_chicken)
    {
      await this.chickenRepository.save({
        id: id,
        ...chickenDto
      });
      return this.findOne(id);
    }
    else
      return null;
  }

  async put(id: number, chickenDto: createChickenDto): Promise<Chicken> {
    const updated_chicken: Chicken = await this.findOne(id);
    if (updated_chicken)
    {
      await this.chickenRepository.save({
        id: id,
        ...chickenDto
      });
      return this.findOne(id);
    }
    else if (updated_chicken === null)
    {
        const chicken: Chicken = this.chickenRepository.create({
          id : id,
          ...chickenDto,
        });
        if (chickenDto.birthday === undefined)
          chicken.birthday = new Date();
        return this.chickenRepository.save(chicken);
    }
    else
      return null;
  }

  async run(id: number): Promise<void> {
    const run_chicken: Chicken = await this.findOne(id);
    if (run_chicken)
    {
      await this.chickenRepository.save({
        id: id,
        steps: ++run_chicken.steps
      });
    }
    else
      return null;
  }
}
