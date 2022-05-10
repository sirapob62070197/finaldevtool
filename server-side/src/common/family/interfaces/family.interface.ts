import { Document } from 'mongoose'
import { Service } from '../../service/interfaces/service.interface'

export interface Family extends Document {
  readonly familyName: string
  readonly familyCode: string
  readonly service: Service
}
