import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaymentType } from './entities/payment.entity';
import { Payment } from './interfaces/payment.interface';
import { CreatePaymentInput } from './dto/create-payment.input';

@Injectable()
export class PaymentService {

  constructor(@InjectModel('payment') private paymentModel: Model<Payment>) { }

  async create(createPaymentDto: CreatePaymentInput): Promise<PaymentType> {
    const createdPayment = new this.paymentModel(createPaymentDto)
    return await createdPayment.save()
  }

  async findAll(): Promise<PaymentType[]> {
    return await this.paymentModel.find().exec()
  }

  async findById(id: string): Promise<PaymentType> {
    return await this.paymentModel.findById(id);
  }

  async updatePayment(id: string, payment: Payment): Promise<PaymentType> {
    return await this.paymentModel.findByIdAndUpdate(id, payment, {new: true})
  }
}
