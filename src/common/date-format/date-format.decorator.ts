import { Transform, TransformFnParams } from 'class-transformer'
import dayjs from 'dayjs'

export const DateFormat = (format: string = 'YYYY-MM-DD HH:mm:ss') => {
    return Transform(({ value }: TransformFnParams): string => {
        if (!value) return value;
        return dayjs(value).format(format);
    });
}