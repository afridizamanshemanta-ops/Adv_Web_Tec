import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  // POST /users/register  -> default status 201 Created
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    // Validation ValidationPipe + DTO diye hoye geche, tai ekhane if/else lagbe na
    return {
      message: 'User registered successfully',
      user: {
        fullName: createUserDto.fullName,
        email: createUserDto.email,
        age: createUserDto.age,
        accountType: createUserDto.accountType,
        // password intentionally return kora hoyni
      },
    };
  }
}
