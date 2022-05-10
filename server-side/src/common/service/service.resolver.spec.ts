import { Test, TestingModule } from '@nestjs/testing';
import { ServiceResolver } from './service.resolver';

describe('Unit test Service Resolver', () => {
    let resolver: ServiceResolver;

    const mock = {
        services: jest.fn(() => {
            return [
                {
                    id: "62091f5759edd7af6b56ef02",
                    serviceName: "Netflix",
                    serviceImage: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
                    serviceAmount: 419,
                    servicePeriod: "1661706000000",
                    serviceMaxMember: 6
                  },
                  {
                    id: "6209207f51609cb213cd1644",
                    serviceName: "YouTube Premium",
                    serviceImage: "https://cdn-icons-png.flaticon.com/512/1383/1383260.png",
                    serviceAmount: 299,
                    servicePeriod: "1653757200000",
                    serviceMaxMember: 6
                  },
                  {
                    id: "62094ed51d5751ba7b8db5fb",
                    serviceName: "Spotify Premium",
                    serviceImage: "https://cdn-icons-png.flaticon.com/512/725/725281.png",
                    serviceAmount: 199,
                    servicePeriod: "1653757200000",
                    serviceMaxMember: 6
                  }
            ]
        }),
        findServicesByName: jest.fn((name) => {
            return {          
                id: "62091f5759edd7af6b56ef02",
                serviceName: name,
                serviceImage: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
                serviceAmount: 419,
                servicePeriod: "1661706000000",
                serviceMaxMember: 6    
            }
        })
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ServiceResolver],
        })
            .overrideProvider(ServiceResolver)
            .useValue(mock)
            .compile();
        
            resolver = module.get<ServiceResolver>(ServiceResolver);
    })

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });

    it('should get all service', async () => {
        expect((await resolver.services()).length).not.toBe(0);
    
        expect(await resolver.services()[0]).not.toBe(await resolver.services()[1])
    
        expect(mock.services).toHaveBeenCalled();
    });

    it('should get service by name', async () => {    
        const name = 'Netflix'
        expect(await resolver.findServicesByName(name)).toEqual({          
            id: "62091f5759edd7af6b56ef02",
            serviceName: name,
            serviceImage: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
            serviceAmount: 419,
            servicePeriod: "1661706000000",
            serviceMaxMember: 6
        });
    
        expect(mock.findServicesByName).toHaveBeenCalled();
    });

})