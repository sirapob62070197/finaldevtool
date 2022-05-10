import { InputType, Field, Float } from '@nestjs/graphql';


@InputType()
export class CreatePaymentInput {
  @Field()
  readonly paymentMethod: string
  @Field(() => Float)
  readonly paymentAmount: number
  @Field()
  readonly paymentInvoice: string
  @Field()
  readonly paymentStatus: boolean
  // @Field()
  // readonly member: string
}
