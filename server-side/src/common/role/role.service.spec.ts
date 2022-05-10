import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { RoleService } from './role.service';

describe('Unit test Role Service', () => {
    let service: RoleService;

    const mockRoleService = {
        findAll: jest.fn().mockImplementation(() => Promise.resolve([
            {
                id: Date.now().toString(),
                roleName: 'host'
            },{
                id: Date.now().toString(),
                roleName: 'member'
            }
        ])),
        findById: jest.fn().mockImplementation((id) => 
            Promise.resolve({
                id: id, 
                roleName: Date.now().toString()
            })
        ),
        findByName: jest.fn().mockImplementation((name) => 
            Promise.resolve({
                id: Date.now(), 
                roleName: name
            })
        )
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RoleService, {
                provide: getModelToken('role'),
                useValue: mockRoleService
            }]
        }).compile();

        service = module.get<RoleService>(RoleService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should get all role', async () => {
        expect((await mockRoleService.findAll()).length).not.toBe(0);
    
        expect(mockRoleService.findAll).toHaveBeenCalled();
    })

    it('should find role by id', async () => {
        expect(await mockRoleService.findById('1')).toEqual({
            id: '1',
            roleName: expect.any(String)
        });

        expect(mockRoleService.findById).toHaveBeenCalled();
    })

    it('should find role by name', async () => {
        const role = 'host'
        expect(await mockRoleService.findByName(role)).toEqual({
            id: expect.any(Number),
            roleName: role
        });

        expect(mockRoleService.findByName).toHaveBeenCalled();
    })


})