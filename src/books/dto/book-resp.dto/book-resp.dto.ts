import { DateFormat } from 'src/common/date-format/date-format.decorator';


export class BookRespDto {
    id: number;
    title: string;
    description: string;
    author: string;
    @DateFormat('YYYY-MM-DD HH:mm:ss')
    createdAt: string;
    @DateFormat('YYYY-MM-DD HH:mm:ss')
    updatedAt: string;
}
