import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column('text')
  description!: string;

  @Column('int')
  duration!: number; // Duration in minutes

  @Column('decimal', { precision: 10, scale: 2 })
  price!: number;

  @Column({ default: true })
  isActive!: boolean;
}