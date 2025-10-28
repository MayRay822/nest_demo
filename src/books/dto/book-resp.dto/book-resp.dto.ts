import { DateFormat } from 'src/common/date-format/date-format.decorator';
import { ApiProperty } from '@nestjs/swagger';


export class BookRespDto {
    @ApiProperty({ description: 'ID', example: 1 })
    id: number;
    @ApiProperty({ description: '标题', example: '标题' })
    title: string;
    @ApiProperty({ description: '描述', example: '描述' })
    description: string;
    @ApiProperty({ description: '作者', example: '作者' })
    author: string;
    @ApiProperty({ description: '创建时间', example: '2021-01-01 12:00:00', format: 'date-time' })
    @DateFormat('YYYY-MM-DD HH:mm:ss')
    createdAt: string;
    @ApiProperty({ description: '更新时间', example: '2021-01-01 12:00:00', format: 'date-time' })
    @DateFormat('YYYY-MM-DD HH:mm:ss')
    updatedAt: string;
}
