import { Injectable } from '@nestjs/common';
import { Family } from './family.entity';

@Injectable()
export class FamilyService {
    families:Family[] = [
        {
            id: "124asd57",
            name: "Family 1",
            code: "12345678",
            service: "yt112",
            member_id: "user112",
            role_id: 1,

        }, 
        {
            id: "245asd35",
            name: "Family 2",
            code: "00000000",
            service: "nf548",
            member_id: "user336",
            role_id: 1,
        }, 
        {
            id: "sadasd454",
            name: "Family 3",
            code: "56478221",
            service: "ph5879",
            member_id: "user112",
            role_id: 2,
        }, 
    ]

    getFamilyById(id:string){
        return this.families.filter(family => family.id === id)
    }

    getAllFamily(id:string){
        return this.families.filter(member => member.member_id === id)
        // if select host family this.families.filter(member => member.member_id === id && member.role === 1)
        // if select member family this.families.filter(member => member.member_id === id && member.role === 2)
    }

    createFamiy(name:string, service:string, member_id:string){
        this.families.push(
            {
                id: "test 123",
                name: name,
                code: "aaaaaaaa",
                service: service,
                member_id: member_id,
                role_id: 1
            }
        )
        return this.families
    }

    joinFamily(code:string){
        let family:Family[] = this.families.filter(member => member.code === code)
        console.log(family);
        return `Join ${family[0].name} success`
        
    }

}
