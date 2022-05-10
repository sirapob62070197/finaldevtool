import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleSchema } from './schemas/role.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'role', schema: RoleSchema }])
  ],
  providers: [RoleService, RoleResolver]
})

export class RoleModule {}
