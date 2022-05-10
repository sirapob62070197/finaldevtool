import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoleCreateInput } from './dto/create-role.input';
import { RoleType } from './entities/role.entity';
import { Role } from './schemas/role.schema';

@Injectable()
export class RoleService {

    constructor(@InjectModel('role') private roleModel: Model<Role>) { }

    async findAll(): Promise<RoleType[]> {
        return await this.roleModel.find().exec()
    }

    async findById(id: string): Promise<RoleType> {
        return await this.roleModel.findById(id)
    }

    async findByName(name: string): Promise<RoleType[]> {
        return await this.roleModel.find({ roleName: new RegExp(name, 'i') })
    }

}
