import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AwsCognitoService } from './auth.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AwsCognitoService],
})
export class AuthModule {}
