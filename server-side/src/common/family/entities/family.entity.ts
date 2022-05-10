import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ServiceType } from '../../service/entities/service.entity';

@ObjectType()
export class FamilyType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly familyName: string
  @Field()
  readonly familyCode: string
  @Field(() => ServiceType)
  readonly service: ServiceType
}
