import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/services/users.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  createUser() {
    return this.userService.createUser({ name: 'John Doe' });
  }
}
