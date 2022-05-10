import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { PaymentService } from './payment.service';
import { PaymentType } from './entities/payment.entity';
import { CreatePaymentInput } from './dto/create-payment.input';
import { Payment } from './interfaces/payment.interface';

@Resolver(of => PaymentType)
export class PaymentResolver {

  constructor(private readonly paymentService: PaymentService) { }

  @Query(returns => [PaymentType])
  async payments(): Promise<PaymentType[]> {
    return this.paymentService.findAll();
  }

  @Query(returns => PaymentType, { name: 'payment' })
  async findPaymentById(@Args('id') id: string): Promise<PaymentType> {
    return this.paymentService.findById(id);
  }

  @Mutation(returns => PaymentType)
  createPayment(@Args('input') input: CreatePaymentInput): Promise<PaymentType> {
    return this.paymentService.create(input)
  }

  @Mutation(returns => PaymentType)
  updatePayment(@Args('id') id: string, @Args('input') input: CreatePaymentInput) {
    return this.paymentService.updatePayment(id, input as Payment)
  }
  
  

}
