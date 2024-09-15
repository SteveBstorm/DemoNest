import {IsNotEmpty} from 'class-validator'

export class ArticleUpdateDTO {
    @IsNotEmpty({message : 'Contenu ne peut être vide'})
    content : string

    @IsNotEmpty()
    author: string
}