import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) 
        private userRepo : Repository<User>
    ){}

    getAll() : Promise<User[]> {
        return this.userRepo.find()
    }

    create(u : User): Promise<User> {
        return this.userRepo.save(u)
    }

    getWithArticle() : Promise<User[]> {
        return this.userRepo
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.articles", "article")
        .getMany()
    }
}
