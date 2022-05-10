import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ServiceService } from './service.service';

describe('Unit test Service Service', () => {
    let service: ServiceService;

    const mock = {
        findAll: jest.fn().mockImplementation(() => Promise.resolve([
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
        ])),
        findOne: jest.fn().mockImplementation((id) => 
            Promise.resolve({
                id: {_id: id},
                serviceName: "Netflix",
                serviceImage: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
                serviceAmount: 419,
                servicePeriod: "1661706000000",
                serviceMaxMember: 6  
            })
        ),
        findByName: jest.fn().mockImplementation((name) => 
            Promise.resolve({
                id: {"_id": "6209207f51609cb213cd1644"},
                serviceName: name,
                serviceImage: "https://cdn-icons-png.flaticon.com/512/1383/1383260.png",
                serviceAmount: 299,
                servicePeriod: "1653757200000",
                serviceMaxMember: 6
              })
        )
    }
    
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ServiceService, {
                provide: getModelToken('service'),
                useValue: mock
            }]
        }).compile();

        service = module.get<ServiceService>(ServiceService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should get all service', async () => {
        expect((await mock.findAll()).length).not.toBe(0);

        expect(mock.findAll).toHaveBeenCalled();
    })

    it('should find service by id', async () => {
        expect(await mock.findOne('62091f5759edd7af6b56ef02')).toEqual({
            id: {_id: "62091f5759edd7af6b56ef02"},
            serviceName: "Netflix",
            serviceImage: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
            serviceAmount: 419,
            servicePeriod: "1661706000000",
            serviceMaxMember: 6
        });

        expect(mock.findOne).toHaveBeenCalled();
    })

    it('should find service by name', async () => {
        expect(await mock.findByName('YouTube Premium')).toEqual({
            id: {_id: "6209207f51609cb213cd1644"},
            serviceName: "YouTube Premium",
            serviceImage: "https://cdn-icons-png.flaticon.com/512/1383/1383260.png",
            serviceAmount: 299,
            servicePeriod: "1653757200000",
            serviceMaxMember: 6
          });

        expect(mock.findByName).toHaveBeenCalled();
    })
})