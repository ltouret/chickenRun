import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Chicken } from './chicken.entity';

@Entity()
export class Farm extends BaseEntity {
    @PrimaryGeneratedColumn()
      id: number;

    @OneToMany(() => Chicken, (chicken : Chicken) => chicken.farm)
      chicken: Chicken[];
}