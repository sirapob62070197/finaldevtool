import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { MemberService } from 'src/test/member/member.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly memberService: MemberService,
    private readonly jwtService: JwtService
  ) { }

  validate() { }
}
