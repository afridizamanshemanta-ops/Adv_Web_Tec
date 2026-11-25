import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column({ unique: true }) email: string;
  @Column() phone: string;
  // Dummy field for this lab only; never store real passwords as plain text.
  @Column() password: string;
  @Column('integer') age: number;
  @Column('integer') yearsOfWorking: number;
}
