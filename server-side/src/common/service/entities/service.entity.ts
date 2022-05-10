import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class ServiceType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly serviceName: string
  @Field(() => Int)
  readonly serviceAmount: number
  @Field()
  readonly servicePeriod: string
  @Field(() => Int)
  readonly serviceMaxMember: number
  @Field()
  readonly serviceImage: string
}
