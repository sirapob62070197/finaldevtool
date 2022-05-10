export class Member {
    id:string;
    email:string;
    password:string;
    firstName:string;
    lastName:string;
    nickName:string;
    userTel:string;
    bookBank:string;
    family:[{family_id, role_id}];
    payment:[{service_id, payment_id}];
}