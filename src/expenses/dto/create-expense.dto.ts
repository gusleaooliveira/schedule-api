import { ApiProperty } from '@nestjs/swagger';

export class CreateExpenseDto {
    @ApiProperty()
    value: number;

    @ApiProperty()
    date: Date;

    @ApiProperty()
    type: string;

    @ApiProperty()
    tag: string;
}
