import * as mongoose from 'mongoose';
//import { Member } from '../../member/schemas/member.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PaymentDocument = Payment & mongoose.Document

@Schema({ collection: 'payment' })
export class Payment {
  @Prop({ type: String, required: true })
  paymentMethod: string

  @Prop({ type: String, required: true })
  paymentInvoice: string

  @Prop({ type: Number, required: true })
  paymentAmount: number

  @Prop({ type: Boolean, required: true })
  paymentStatus: boolean

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'member' })
  // member: Member

}

export const PaymentSchema = SchemaFactory.createForClass(Payment)
