import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class RoleType {
    @Field(() => ID)
    readonly id?: string;
    @Field()
    readonly roleName: string
}