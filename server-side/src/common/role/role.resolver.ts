import { Resolver, Query, Args } from '@nestjs/graphql';
import { RoleCreateInput } from './dto/create-role.input';
import { RoleType } from './entities/role.entity';
import { RoleService } from './role.service';
import { Role } from './schemas/role.schema';

@Resolver(of => RoleType)
export class RoleResolver {

    constructor(private readonly roleService: RoleService){ }

    @Query(returns => [RoleType])
    async roles(): Promise<RoleType[]> {
        return this.roleService.findAll()
    }

    @Query(returns => [RoleType])
    async findRoleByName(@Args('name') name: string): Promise<RoleType[]> {
        return this.roleService.findByName(name)
    }

    @Query(returns => RoleType, { name: 'role' })
    async findRoleById(@Args('id') id:string): Promise<RoleType> {
        return this.roleService.findById(id)
    }

}