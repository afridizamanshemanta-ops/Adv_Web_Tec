import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateJobConnectTables1732530000000 implements MigrationInterface {
  name = 'CreateJobConnectTables1732530000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "users" (
      "id" SERIAL NOT NULL,
      "fullName" character varying(120) NOT NULL,
      "email" character varying(160) NOT NULL,
      "role" character varying(20) NOT NULL DEFAULT 'seeker',
      "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
      CONSTRAINT "UQ_users_email" UNIQUE ("email"),
      CONSTRAINT "PK_users_id" PRIMARY KEY ("id")
    )`);
    await queryRunner.query(`CREATE TABLE "jobs" (
      "id" SERIAL NOT NULL,
      "title" character varying(150) NOT NULL,
      "companyName" character varying(150) NOT NULL,
      "location" character varying(120) NOT NULL,
      "description" text NOT NULL,
      "salary" integer,
      "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
      CONSTRAINT "PK_jobs_id" PRIMARY KEY ("id")
    )`);
    await queryRunner.query(`CREATE TABLE "applications" (
      "id" SERIAL NOT NULL,
      "coverLetter" text,
      "status" character varying(30) NOT NULL DEFAULT 'Pending',
      "appliedAt" TIMESTAMP NOT NULL DEFAULT now(),
      "userId" integer NOT NULL,
      "jobId" integer NOT NULL,
      CONSTRAINT "PK_applications_id" PRIMARY KEY ("id"),
      CONSTRAINT "FK_applications_user" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION,
      CONSTRAINT "FK_applications_job" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE CASCADE ON UPDATE NO ACTION
    )`);
    await queryRunner.query(`CREATE INDEX "IDX_applications_userId" ON "applications" ("userId")`);
    await queryRunner.query(`CREATE INDEX "IDX_applications_jobId" ON "applications" ("jobId")`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "IDX_applications_jobId"`);
    await queryRunner.query(`DROP INDEX "IDX_applications_userId"`);
    await queryRunner.query(`DROP TABLE "applications"`);
    await queryRunner.query(`DROP TABLE "jobs"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
