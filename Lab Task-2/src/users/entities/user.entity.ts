import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Application } from '../../applications/entities/application.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn() id: number;
  @Column({ length: 120 }) fullName: string;
  @Column({ length: 160, unique: true }) email: string;
  @Column({ length: 20, default: 'seeker' }) role: string;
  @CreateDateColumn() createdAt: Date;
  @OneToMany(() => Application, (application) => application.user) applications: Application[];
}
