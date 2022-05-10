import { MemberModule } from './../../test/member/member.module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { AuthService } from './auth.service';

@Module({
  imports: [
    MemberModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.SECRET_HASH,
      signOptions: {
        expiresIn: '3600s'
      }
    })
  ],
  providers: [AuthService]
})
export class AuthModule { }
