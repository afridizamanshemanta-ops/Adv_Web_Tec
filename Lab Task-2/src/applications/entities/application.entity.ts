import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Job } from '../../jobs/entities/job.entity';

@Entity('applications')
@Index(['userId'])
@Index(['jobId'])
export class Application {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'text', nullable: true }) coverLetter: string;
  @Column({ length: 30, default: 'Pending' }) status: string;
  @CreateDateColumn() appliedAt: Date;
  @Column() userId: number;
  @Column() jobId: number;
  @ManyToOne(() => User, (user) => user.applications, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' }) user: User;
  @ManyToOne(() => Job, (job) => job.applications, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'jobId' }) job: Job;
}
