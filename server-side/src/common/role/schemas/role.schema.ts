import * as mongoose from 'mongoose'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RoleDocument = Role & mongoose.Document

@Schema({ collection: 'role' })
export class Role {

    @Prop({ type: String, required: true })
    roleName: string
}

export const RoleSchema = SchemaFactory.createForClass(Role)