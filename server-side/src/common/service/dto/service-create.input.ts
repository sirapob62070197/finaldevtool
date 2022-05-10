import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class ServiceCreateInput {
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