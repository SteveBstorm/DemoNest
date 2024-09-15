import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './article/article.model';
import { ArticleController } from './article/article.controller';
import { ArticleService } from './article/article.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from './user/user.model';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host : 'localhost',
      port: 1433,
      database: 'typeormdb',
      username : 'admin',
      password : 'steve1983',
      options: {
        encrypt: false, // MSSQL-specific option
        // trustServerCertificate : true
      },
      // extra: {
      //   options: {
      //       trustedConnection: true,
      //   }
    // },
      synchronize: true, //use this with development enviroment
      entities: [Article, User],
    }),
    TypeOrmModule.forFeature([Article, User])],
  controllers: [ArticleController, UserController],
  providers: [AppService, ArticleService, UserService],
})
export class AppModule {}
