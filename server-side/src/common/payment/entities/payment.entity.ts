import { ObjectType, Field, Float, ID } from '@nestjs/graphql';
// import { MemberType } from '../../member/entities/member.entity';

@ObjectType()
export class PaymentType {
  @Field(() => ID)
  readonly id?: string;
  @Field(() => Float)
  readonly paymentAmount: number
  @Field()
  readonly paymentInvoice: string
  @Field()
  readonly paymentMethod: string
  @Field()
  readonly paymentStatus: boolean
  // @Field(() => MemberType)
  // readonly member: MemberType
}
