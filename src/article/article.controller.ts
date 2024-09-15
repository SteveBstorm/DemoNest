import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.model';
import { ArticleUpdateDTO } from 'src/dtos/article_update.dto';

@Controller('article')
export class ArticleController {

    constructor(private articleService : ArticleService){}
    @Get()
    getAll() {
        return this.articleService.getAll()
    }

    @Get("/:id")
    getById(@Param('id') id: number){
        return this.articleService.getById(id)
    }

    @Post()
    create(@Body() newArticle:Article) {
        return this.articleService.create(newArticle)
    }
    @Delete("/:id")
    delete(@Param('id') id: number){
        return this.articleService.delete(id).then((x) => console.log("deleted"))
    }

    // @Put("/:id")
    // update(@Param('id') id : number, @Body() dto : ArticleUpdateDTO) 
    // {
    //     return this.articleService.update(id, dto) 
    // }
}
