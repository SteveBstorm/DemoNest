import { Inject, Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { Article } from './article.model';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleUpdateDTO } from 'src/dtos/article_update.dto';

@Injectable()
export class ArticleService {
    constructor(@InjectRepository(Article) private articleRepo : Repository<Article>) {
        
    }

    async getAll() : Promise<Article[]> {
        return this.articleRepo.find()
    }

    async getById(id : number) : Promise<Article> {
        return this.articleRepo.findOne({where :  {id : id}})
    }

    async create(newArticle:Article) : Promise<Article> {
        return this.articleRepo.save(newArticle)
    }

    async delete(id: number) : Promise<any> {
        return this.articleRepo.delete({id : id})
    }

    // async update(id: number, dto : ArticleUpdateDTO) : Promise<UpdateResult> {
    //     return this.articleRepo.update(id, dto)
    // }
}
