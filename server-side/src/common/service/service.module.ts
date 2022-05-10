import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceSchema } from './schemas/service.schema';
import { ServiceService } from './service.service';
import { ServiceResolver } from './service.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'service', schema: ServiceSchema }])
  ],
  providers: [ServiceService, ServiceResolver]
})

export class ServiceModule { }
