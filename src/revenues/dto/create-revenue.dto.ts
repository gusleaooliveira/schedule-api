import { ApiProperty } from '@nestjs/swagger';

export class CreateRevenueDto {
    @ApiProperty()
    value: number;

    @ApiProperty()
    date: Date;

    @ApiProperty()
    type: string;
}

