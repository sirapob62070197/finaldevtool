import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class RoleCreateInput {
    @Field()
    readonly roleName: string
}