import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {
    @IsNotEmpty({ message: '标题不能为空' })
    @IsString()
    title: string;

    @IsNotEmpty({ message: '描述不能为空' })
    @IsString()
    description: string;
}
