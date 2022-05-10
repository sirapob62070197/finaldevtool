import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceType } from './entities/service.entity';
import { Service } from './interfaces/service.interface';
import { ServiceCreateInput } from './dto/service-create.input';

@Injectable()
export class ServiceService {

  constructor(@InjectModel('service') private serviceModel: Model<Service>) { }

  async create(createServiceDto: ServiceCreateInput): Promise<ServiceType> {
    const createdService = new this.serviceModel(createServiceDto)
    return await createdService.save()
  }

  async findAll(): Promise<ServiceType[]> {
    return await this.serviceModel.find().exec()
  }

  async findOne(id: string): Promise<ServiceType> {
    return await this.serviceModel.findOne({ _id: id })
  }

  async findByName(name: string): Promise<ServiceType[]> {
    return await this.serviceModel.find({ serviceName: new RegExp(name, 'i') })
  }

  async delete(id: string): Promise<ServiceType> {
    return await this.serviceModel.findByIdAndRemove(id);
  }

  async update(id: string, service: Service): Promise<ServiceType> {
    return await this.serviceModel.findByIdAndUpdate(id, service, { new: true });
  }

}
