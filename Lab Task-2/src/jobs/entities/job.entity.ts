import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Application } from '../../applications/entities/application.entity';

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn() id: number;
  @Column({ length: 150 }) title: string;
  @Column({ length: 150 }) companyName: string;
  @Column({ length: 120 }) location: string;
  @Column({ type: 'text' }) description: string;
  @Column({ type: 'integer', nullable: true }) salary: number;
  @CreateDateColumn() createdAt: Date;
  @OneToMany(() => Application, (application) => application.job) applications: Application[];
}
