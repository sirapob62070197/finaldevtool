import * as mongoose from 'mongoose';
import { Service } from './../../service/schemas/service.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type FamilyDocument = Family & mongoose.Document

@Schema({ collection: 'family' })
export class Family {
  @Prop({ type: String, required: true })
  familyName: string

  @Prop({ type: String, required: true })
  familyCode: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'service' })
  service: Service
}

export const FamilySchema = SchemaFactory.createForClass(Family)
