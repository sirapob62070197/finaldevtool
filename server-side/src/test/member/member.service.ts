import { Injectable, NotFoundException } from '@nestjs/common';
import { Member } from './member.entity';
import * as uuid from 'uuid';
import { NotFoundError } from 'rxjs';

@Injectable()
export class MemberService {
    members:Member[] = []

    createMember(email:string, password:string, firstName:string, lastName:string, nickName:string, tel:string, 
        bookBank:string, family_id:string, role_id:string, service_id:string, payment_id:string){
        this.members.push(
            {
                id:uuid.v4(),
                email:email,
                password:password,
                firstName:firstName,
                lastName:lastName,
                nickName:nickName,
                userTel:tel,
                bookBank:bookBank,
                family:[
                    {family_id, role_id}
                ],
                payment:[
                    {service_id, payment_id}
                ],
            }
        )
        
    }

    getMembers(){
        return this.members
    }

    deleteMember(id:string){
        const found = this.members.find(item => item.id === id)
        if(!found){
            throw new NotFoundException(`Member id ${id} not found`);
        }

        this.members = this.members.filter(item => item.id !== id)
        return this.members
    }
}
