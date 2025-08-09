import { IsNotEmpty, IsString } from 'class-validator';

export class ChangeDeviceStatusReqDto {
  @IsNotEmpty()
  @IsString()
  status: string;
}
