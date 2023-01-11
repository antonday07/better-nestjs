
import { Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class PaginateDataDto {
    @Transform(({ value }) => {
        return +value;
    })
    @IsNumber()
    page?: number = 1;

    @Transform(({ value }) => {
        return +value;
    })
    @IsNumber()
    perPage?: number = 10;

    @IsString()
    search?: string;

    @IsString()
    filter?: string;

    @IsString()
    sort?: string;
}
