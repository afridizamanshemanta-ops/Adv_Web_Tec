# Product Management API — NestJS Lab Task 1

NestJS REST API implementing Product and Employee CRUD using **TypeORM + SQLite**. Records are saved in a real local SQLite database (`database.sqlite`), not an in-memory array.

## Student details (complete before submission)
- SL: [Your serial number]
- Name: [Your full name]
- ID: [Your student ID]
- Section: [Your section]

## Run in VS Code
1. Extract this ZIP and open the `product-management-api` folder in VS Code.
2. Install Node.js 18+ (Node.js 20 LTS recommended).
3. Open Terminal → New Terminal and run:
   ```bash
   npm install
   npm run start:dev
   ```
4. API base URL: `http://localhost:3000/api`
5. SQLite database is created automatically. Optional `.env` can be created from `.env.example`.

Stop server with Ctrl+C. Run production build with `npm run build`, then `npm run start:prod`.

## Product API
| Method | Endpoint | Action |
|---|---|---|
| POST | `/products` | Create product |
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get product by ID |
| PATCH | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |

POST example:
```json
{"name":"Wireless Mouse","category":"Electronics","price":850,"quantity":25}
```
PATCH example:
```json
{"price":900,"quantity":20}
```

## Employee API
| Method | Endpoint | Action |
|---|---|---|
| POST | `/employees` | Create employee |
| GET | `/employees` | Get all employees |
| GET | `/employees/:id` | Get employee by ID |
| PATCH | `/employees/:id` | Update employee |
| DELETE | `/employees/:id` | Delete employee |

POST example:
```json
{"name":"Rahim Ahmed","email":"rahim@example.com","phone":"01700000000","password":"demo1234","age":25,"yearsOfWorking":2}
```
PATCH example:
```json
{"phone":"01800000000","yearsOfWorking":3}
```

## Postman
Import `postman/Product-Management-Lab-Task-1.postman_collection.json`. Execute requests in order. After creating records, set the collection variables `productId` and `employeeId` to the actual IDs returned by the POST requests before testing by-ID, update, and delete requests.

## Required Product screenshots
Save real Postman screenshots in `screenshots/` using these exact names:
1. `01-create.png` — POST body and saved response
2. `02-get-all.png` — response with at least two products
3. `03-get-by-id.png` — one actual product ID
4. `04-update.png` — PATCH body and response
5. `05-confirm-update.png` — GET showing changed values
6. `06-delete.png` — DELETE request and successful response/status
7. `07-confirm-delete.png` — GET all showing deleted product absent

Every screenshot must show HTTP method, full URL, response status, and response body where present. Keep POST/PATCH JSON bodies visible and do not expose credentials. Screenshots are not fabricated; capture them after running the API.

## Validation
DTO validation rejects invalid values and unexpected fields. IDs must be integers. Missing records return 404; invalid input returns 400; duplicate employee email returns 409.

## GitHub submission
Put this project in `Mid/Lab task 1/product-management-api` inside your main course repository. Commit and push the complete project plus screenshots. Submit the direct folder link.

## Notes
`password` is included as the lab's requested dummy field only. It is plain text for demonstration and must never be used for real accounts. TypeORM `synchronize: true` is suitable for this classroom task; production projects should use migrations.
