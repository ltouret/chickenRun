import { IsString, IsNotEmpty, Length, IsPositive, IsInt, IsDateString, IsBoolean, Min, IsOptional} from 'class-validator';

export class createChickenDto {
    @IsString()
    @IsNotEmpty()
    @Length(1, 50)
        name: string;
    @IsOptional()
    @IsDateString()
        birthday?: Date;
    @IsNotEmpty()
    @IsInt()
	@IsPositive()
        weight: number;
    @IsOptional()
    @IsInt()
	@Min(0)
        steps?: number;
    @IsOptional()
    @IsBoolean()
        isRunning?: boolean;
}

export class patchChickenDto {
    @IsOptional()
    @IsString()
    @Length(1, 50)
        name?: string;
    @IsOptional()
    @IsDateString()
        birthday?: Date;
    @IsOptional()
    @IsInt()
	@IsPositive()
        weight?: number;
    @IsOptional()
    @IsInt()
	@Min(0)
        steps?: number;
    @IsOptional()
    @IsBoolean()
        isRunning?: boolean;
}