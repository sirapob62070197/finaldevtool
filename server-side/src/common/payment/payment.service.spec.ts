import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { PaymentService } from './payment.service';

describe('Unit test Payment Service', () => {
    let service: PaymentService;

    const mock = {
        findAll: jest.fn().mockImplementation(() => Promise.resolve([
            {
                id: "620f725af651b224c5c2dbd7",
                paymentAmount: 130,
                paymentMethod: "โอนผ่านธนาคาร",
                paymentStatus: true,
                paymentInvoice: "รายระเอียดใบเสร็จ"
              },
              {
                id: "620f7368f651b224c5c2dbd8",
                paymentAmount: 136,
                paymentMethod: "โอนผ่านธนาคาร",
                paymentStatus: false,
                paymentInvoice: "รายละเอียดใบเสร็จ"
              },
              {
                id: "620f754a8b3c456847dfd5fb",
                paymentAmount: 99,
                paymentMethod: "พร้อมเพย์",
                paymentStatus: true,
                paymentInvoice: "รายละเอียดใบเสร็จ"
              }
        ])),
        findById: jest.fn().mockImplementation((id) => Promise.resolve({
            id: id,
            paymentAmount: 99,
            paymentMethod: "พร้อมเพย์",
            paymentStatus: true,
            paymentInvoice: "รายละเอียดใบเสร็จ"
          }))
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PaymentService, {
                provide: getModelToken('payment'),
                useValue: mock
            }]
        }).compile();

        service = module.get<PaymentService>(PaymentService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    
    it('should get all payment', async () => {
        expect((await mock.findAll()).length).not.toBe(0);

        expect((await mock.findAll()).length).not.toBe(null);

        expect(mock.findAll).toHaveBeenCalled();
    })

    it('should find payment by id', async () => {
        const id = '620f754a8b3c456847dfd5fb'
        expect(await mock.findById(id)).toEqual({
            id: id,
            paymentAmount: 99,
            paymentMethod: "พร้อมเพย์",
            paymentStatus: true,
            paymentInvoice: "รายละเอียดใบเสร็จ"
          });

        expect(mock.findById).toHaveBeenCalled();
    })

})