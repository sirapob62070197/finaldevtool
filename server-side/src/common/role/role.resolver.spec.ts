import { Test, TestingModule } from '@nestjs/testing';
import { RoleResolver } from './role.resolver';

describe('Unit test Role Resolver', () => {
  let resolver: RoleResolver;

  const mockRoleService = {
    roles: jest.fn(() => {
      return [
        {
          id: '1',
          roleName: 'host'
        },{
          id: '2',
          roleName: 'member'
        }
      ]
    }),
    findRoleByName: jest.fn((name) => {
      return{
        id: Date.now().toString(),
        roleName: name
      }
    }),
    findRoleById: jest.fn((id) => {
      return{
        id: id,
        roleName: Date.now().toString()
      }
    }),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleResolver],
    })
      .overrideProvider(RoleResolver)
      .useValue(mockRoleService)
      .compile();

    resolver = module.get<RoleResolver>(RoleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should get all role', async () => {
    expect((await resolver.roles()).length).toBe(2)

    expect(await resolver.roles()).toContainEqual({
      id: expect.any(String),
      roleName: 'host'
    })

    expect(await resolver.roles()).toContainEqual({
      id: expect.any(String),
      roleName: 'member'
    })

    expect(mockRoleService.roles).toHaveBeenCalled();
  });

  it('should get role by name', () => {
    const type:string = 'host'

    expect(resolver.findRoleByName(type)).toEqual({
      id: expect.any(String),
      roleName: type
    })

    expect(mockRoleService.findRoleByName).toHaveBeenCalled();
  });

  it('should get role by id', () => {
    const id:string = '12545' 

    expect(resolver.findRoleById(id)).toEqual({
      id: id,
      roleName: expect.any(String)
    })

    expect(mockRoleService.findRoleById).toHaveBeenCalled()
  });

});
