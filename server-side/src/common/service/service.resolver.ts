import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ServiceService } from './service.service';
import { ServiceType } from './entities/service.entity';
import { ServiceCreateInput } from './dto/service-create.input';
import { Service } from './interfaces/service.interface';

@Resolver(of => ServiceType)
export class ServiceResolver {

  constructor(private readonly serviceService: ServiceService) { }

  @Query(returns => [ServiceType])
  async services(): Promise<ServiceType[]> {
    return this.serviceService.findAll()
  }

  @Query(returns => [ServiceType])
  async findServicesByName(
    @Args('name') name: string
  ): Promise<ServiceType[]> {
    return this.serviceService.findByName(name)
  }

  @Mutation(returns => ServiceType)
  async createService(@Args('input') input: ServiceCreateInput): Promise<ServiceType> {
    return this.serviceService.create(input)
  }

  @Mutation(returns => ServiceType)
  async updateService(
    @Args('id') id: string,
    @Args('input') input: ServiceCreateInput
  ) {
    return this.serviceService.update(id, input as Service)
  }

  @Mutation(returns => ServiceType)
  async deleteService(@Args('id') id: string) {
    return this.serviceService.delete(id)
  }

}
