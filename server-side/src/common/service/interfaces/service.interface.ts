import { Document } from 'mongoose'

export interface Service extends Document {
  readonly serviceName: string
  readonly serviceAmount: number
  readonly servicePeriod: string
  readonly serviceMaxMember: number
  readonly serviceImage: string
}