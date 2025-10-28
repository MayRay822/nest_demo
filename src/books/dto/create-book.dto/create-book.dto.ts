import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
    @ApiProperty({ description: '标题', example: '标题' })
    @IsNotEmpty({ message: '标题不能为空' })
    @IsString()
    title: string;

    @ApiProperty({ description: '描述', example: '描述' })
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({ description: '作者', example: '作者' })
    @IsNotEmpty()
    @IsString()
    author: string;
}
