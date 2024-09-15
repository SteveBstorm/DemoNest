import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('user')
export class UserController {
    constructor(private userService : UserService){}

    @Get()
    getAll() {
        return this.userService.getAll()
    }

    @Post()
    create(@Body() u: User){
        return this.userService.create(u)
    }

    @Get("test")
    getTest() {
        return this.userService.getWithArticle()
    }
}
