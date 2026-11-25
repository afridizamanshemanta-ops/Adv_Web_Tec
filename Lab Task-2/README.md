# JobConnect – Lab Task 2 (NestJS + TypeORM + PostgreSQL)

A ready-to-run REST API for the JobConnect online job portal. It contains exactly three project entities and uses **TypeORM migrations** (not `synchronize`) to create the database tables.

## 1. Entities and relationships

| Entity/table | Main fields | Purpose |
|---|---|---|
| User (`users`) | id (PK), fullName, email (unique), role, createdAt | Job seeker/employer/admin account |
| Job (`jobs`) | id (PK), title, companyName, location, description, salary, createdAt | Job posts published by employers |
| Application (`applications`) | id (PK), userId (FK), jobId (FK), coverLetter, status, appliedAt | A job seeker's application for a job |

Relationships: one User can have many Applications; one Job can have many Applications.

## 2. Requirements
- Node.js 18 or newer
- PostgreSQL 14 or newer, OR Docker Desktop
- VS Code

## 3. Run in VS Code

Open this folder in VS Code, then open Terminal.

### Option A – Start PostgreSQL with Docker (easiest)
```bash
docker compose up -d
```
This creates database `jobconnect_lab` with username/password `postgres` / `postgres` on port `5432`.

### Option B – Use your own PostgreSQL
Create a database named `jobconnect_lab`, then edit `.env` with your database host, port, username, password and database name. Do not run Docker if you use an existing server on port 5432.

### Install, migrate, and start
```bash
npm install
npm run migration:run
npm run start:dev
```
API base URL: `http://localhost:3000`

The migration creates `users`, `jobs`, `applications`, and TypeORM's `migrations` tracking table. `synchronize` is disabled. To undo the latest migration: `npm run migration:revert`.

## 4. API endpoints
All endpoints accept/return JSON.

| Method | URL | Purpose |
|---|---|---|
| POST | `/users` | Create a JobConnect user |
| GET | `/users` | Get all users |
| POST | `/jobs` | Create a job post |
| GET | `/jobs` | Get all job posts |
| POST | `/applications` | Submit an application |
| GET | `/applications` | Get all applications (includes user and job details) |

## 5. Postman testing
Set header `Content-Type: application/json` for POST requests.

### A. Create User – POST `http://localhost:3000/users`
```json
{
  "fullName": "Rahim Ahmed",
  "email": "rahim@example.com",
  "role": "seeker"
}
```
Then GET `http://localhost:3000/users`.

### B. Create Job – POST `http://localhost:3000/jobs`
```json
{
  "title": "Junior Web Developer",
  "companyName": "Tech Solutions Ltd.",
  "location": "Dhaka, Bangladesh",
  "description": "Develop and maintain web applications using JavaScript and NestJS.",
  "salary": 35000
}
```
Then GET `http://localhost:3000/jobs`.

### C. Create Application – POST `http://localhost:3000/applications`
Use the actual `id` returned by the User and Job POST requests (normally 1 for the first record in a fresh database).
```json
{
  "userId": 1,
  "jobId": 1,
  "coverLetter": "I am interested in this position and believe my skills are a good match."
}
```
Then GET `http://localhost:3000/applications`.

### D. Required-field validation test (must return 400)
Send POST `http://localhost:3000/users` with:
```json
{
  "fullName": "",
  "email": "invalid-email"
}
```
Expected: **400 Bad Request** with validation messages. You can also test POST `/jobs` with an empty `title`, or POST `/applications` with missing `userId`.

## 6. Postman checklist for submission
- [ ] POST `/users` – one user inserted
- [ ] GET `/users` – user retrieved
- [ ] POST `/jobs` – one job inserted
- [ ] GET `/jobs` – job retrieved
- [ ] POST `/applications` – one application inserted
- [ ] GET `/applications` – application retrieved with related user/job
- [ ] Invalid POST request – 400 Bad Request screenshot
- [ ] PostgreSQL screenshot showing `users`, `jobs`, `applications`, and `migrations` tables

## 7. Migration commands
```bash
npm run migration:run
npm run migration:revert
npm run migration:generate -- src/database/migrations/YourMigrationName
```
The project already includes the initial migration at `src/database/migrations/1732530000000-CreateJobConnectTables.ts`.
