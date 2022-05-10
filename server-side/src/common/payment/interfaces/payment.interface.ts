import { Document } from 'mongoose'
//import { Member } from '../../service/interfaces/member.interface'


export interface Payment extends Document {
  readonly _id: string
  readonly paymentAmount: number
  readonly paymentInvoice: string
  readonly paymentMethod: string
  readonly paymentStatus: boolean
  //readonly member: Member

}
