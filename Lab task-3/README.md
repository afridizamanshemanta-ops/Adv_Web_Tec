# CSC 4161 - Lab Task 3 (User Registration API)

## Run korar steps
1. VS Code diye ei folder open koro
2. Terminal e: `npm install`
3. Then: `npm run start:dev`
4. Postman e `Postman_Collection.json` import koro (Import -> File) ba manually POST http://localhost:3000/users/register e request pathao

## Files
- src/main.ts                         -> Global ValidationPipe
- src/users/dto/create-user.dto.ts    -> CreateUserDto (class-validator)
- src/users/users.controller.ts       -> POST /users/register
