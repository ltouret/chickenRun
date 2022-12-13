import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Farm } from './farm.entity';

@Entity()
export class Chicken extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 60})
  name: string;

  @Column({type: 'date', nullable: true})
  birthday: Date;

  @Column({type: 'int4'})
  weight: number;

  @Column({type: 'int4', default: 0})
  steps: number;

  @Column({type: 'boolean', default: false})
  isRunning: boolean;

  @ManyToOne(() => Farm, (farm : Farm) => farm.chicken, {
    eager: true
  })
    farm: Farm;
}