import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { FamilyService } from './family.service';

@Controller('family')
export class FamilyController {
    constructor(private familyService:FamilyService){

    }

    @Get("/:id")
    getFamilyById(@Param("id") id:string){        
        return this.familyService.getFamilyById(id)
    }

    @Get("/member/:id")
    getAllFamily(@Param("id") id:string){        
        return this.familyService.getAllFamily(id)
    }

    @Post()
    createNewFamily(@Body("name") name:string, @Body("service") service:string, @Body("member_id") member_id:string){
        return this.familyService.createFamiy(name, service, member_id)
    }

    @Put("/:code")
    joinFamily(@Param("code") code:string){
        return this.familyService.joinFamily(code)
    }
}
