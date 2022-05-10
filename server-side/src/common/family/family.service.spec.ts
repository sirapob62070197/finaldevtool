import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { FamilyService } from './family.service';

describe('Unit test Family Service', () => {
    let service: FamilyService;

    const mock = {
        findAll: jest.fn().mockImplementation(() => Promise.resolve([
            {
              id: "6207ffe9c038d2a224c601e8",
              familyName: "Sia o cha",
              familyCode: "RCA885",
              service: {
                id: "62091f5759edd7af6b56ef02",
                serviceName: "Netflix",
                serviceImage: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
                serviceAmount: 419,
                servicePeriod: "1661706000000",
                serviceMaxMember: 6
              }
            },
            {
              id: "62094f691d5751ba7b8db5fd",
              familyName: "Large Family",
              familyCode: "OP9856",
              service: {
                id: "6209207f51609cb213cd1644",
                serviceName: "YouTube Premium",
                serviceImage: "https://cdn-icons-png.flaticon.com/512/1383/1383260.png",
                serviceAmount: 299,
                servicePeriod: "1653757200000",
                serviceMaxMember: 6
              }
            },
            {
              id: "62094f951d5751ba7b8db601",
              familyName: "Phee-mee Family",
              familyCode: "OOP582",
              service: {
                id: "62094ed51d5751ba7b8db5fb",
                serviceName: "Spotify Premium",
                serviceImage: "https://cdn-icons-png.flaticon.com/512/725/725281.png",
                serviceAmount: 199,
                servicePeriod: "1653757200000",
                serviceMaxMember: 6
              }
            },
            {
              id: "6209521bbc21a80424bfdca8",
              familyName: "DeerShort Family",
              familyCode: "OOP583",
              service: {
                id: "62094ed51d5751ba7b8db5fb",
                serviceName: "Spotify Premium",
                serviceImage: "https://cdn-icons-png.flaticon.com/512/725/725281.png",
                serviceAmount: 199,
                servicePeriod: "1653757200000",
                serviceMaxMember: 6
              }
            },
            {
              id: "621b67e1999032613b91c27b",
              familyName: "Mhoo Hun Family",
              familyCode: "AWA363",
              service: {
                id: "62094ed51d5751ba7b8db5fb",
                serviceName: "Spotify Premium",
                serviceImage: "https://cdn-icons-png.flaticon.com/512/725/725281.png",
                serviceAmount: 199,
                servicePeriod: "1653757200000",
                serviceMaxMember: 6
              }
            },
            {
              id: "622473c716437acc56799a00",
              familyName: "Mock Family",
              familyCode: "2IKQAF",
              service: {
                id: "62091f5759edd7af6b56ef02",
                serviceName: "Netflix",
                serviceImage: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
                serviceAmount: 419,
                servicePeriod: "1661706000000",
                serviceMaxMember: 6
              }
            }
        ])),
        findOne: jest.fn().mockImplementation((id) => Promise.resolve({
            id: id,
            familyName: "Phee-mee Family",
            familyCode: "OOP582",
            service: {
                id: "62094ed51d5751ba7b8db5fb",
                serviceName: "Spotify Premium",
                serviceImage: "https://cdn-icons-png.flaticon.com/512/725/725281.png",
                serviceAmount: 199,
                servicePeriod: "1653757200000",
                serviceMaxMember: 6
            }
        }))
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FamilyService, {
                provide: getModelToken('family'),
                useValue: mock
            }]
        }).compile();

        service = module.get<FamilyService>(FamilyService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should get all family', async () => {
        expect((await mock.findAll()).length).not.toBe(0);

        expect((await mock.findAll()).length).not.toBe(null);

        expect(mock.findAll).toHaveBeenCalled();
    })

    it('should be get family by id', async () => {
        const id = "62094f951d5751ba7b8db601"
        expect(await mock.findOne(id)).toEqual({
            id: id,
            familyName: "Phee-mee Family",
            familyCode: "OOP582",
            service: {
              id: "62094ed51d5751ba7b8db5fb",
              serviceName: "Spotify Premium",
              serviceImage: "https://cdn-icons-png.flaticon.com/512/725/725281.png",
              serviceAmount: 199,
              servicePeriod: "1653757200000",
              serviceMaxMember: 6
            }
        })

        expect(await mock.findOne).toHaveBeenCalled();
    })

})