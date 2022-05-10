import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FamilyService } from './family.service';
import { FamilyType } from './entities/family.entity';
import { CreateFamilyInput } from './dto/create-family.input';

@Resolver(() => FamilyType)
export class FamilyResolver {

  constructor(private readonly familyService: FamilyService) { }

  @Mutation(returns => FamilyType)
  createFamily(@Args('input') input: CreateFamilyInput): Promise<FamilyType> {
    return this.familyService.create(input);
  }

  @Query(() => [FamilyType])
  async families(): Promise<FamilyType[]> {
    return this.familyService.findAll();
  }

  @Query(() => FamilyType, { name: 'family' })
  async findOne(@Args('id') id: string) {
    return this.familyService.findOne(id);
  }

  @Mutation(() => FamilyType)
  removeFamily(@Args('id', { type: () => Int }) id: number) {
    return this.familyService.remove(id);
  }
}
