import { FamilySchema } from './schemas/family.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FamilyService } from './family.service';
import { FamilyResolver } from './family.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'family', schema: FamilySchema }])
  ],
  providers: [FamilyResolver, FamilyService]
})

export class FamilyModule { }
