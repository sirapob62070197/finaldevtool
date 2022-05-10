import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
    constructor(private memberService:MemberService){
        
    }

    @Get()
    getMember(){
        return this.memberService.getMembers()
    }

    @Post()
    createMember(
        @Body("email") email:string,
        @Body("password") password:string,
        @Body("firstName") firstName:string,
        @Body("lastName") lastName:string,
        @Body("nickName") nickName:string,
        @Body("tel") tel:string,
        @Body("bookBank") bookBank:string,
        @Body("family_id") family_id:string,
        @Body("role_id") role_id:string,
        @Body("service_id") service_id:string,
        @Body("payment_id") payment_id:string,
        ){
        this.memberService.createMember(email, password, firstName, lastName, nickName, tel, bookBank, family_id, role_id, service_id, payment_id)
        return `crete account success`
    }

    @Delete("/:id")
    deleteMember(@Param("id") id:string){
        return this.memberService.deleteMember(id)
    }
}
