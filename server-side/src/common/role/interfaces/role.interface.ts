import { Document } from 'mongoose'

export interface Role extends Document {
    readonly roleName: string
}