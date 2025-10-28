import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { DateFormat } from 'src/common/date-format/date-format.decorator';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column('varchar', { length: 10 })
    author: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    @DateFormat('YYYY-MM-DD HH:mm:ss')
    createdAt: Date;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    @DateFormat('YYYY-MM-DD HH:mm:ss')
    updatedAt: Date;
}
