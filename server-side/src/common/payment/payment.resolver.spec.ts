import { Test, TestingModule } from '@nestjs/testing';
import { PaymentResolver } from './payment.resolver';

describe('Unit test Payment Resolver', () => {
    let resolver: PaymentResolver;

    const mock = {
        payments: jest.fn(() => {
            return [
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
            ]
        }),
        findPaymentById: jest.fn((id) => {
            return {
                id: id,
                paymentAmount: 99,
                paymentMethod: "พร้อมเพย์",
                paymentStatus: true,
                paymentInvoice: "รายละเอียดใบเสร็จ"
              }
        })
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PaymentResolver],
        })
            .overrideProvider(PaymentResolver)
            .useValue(mock)
            .compile();

        resolver = module.get<PaymentResolver>(PaymentResolver);
    })

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    })

    it('should get all payment', async () => {
        expect((await resolver.payments()).length).not.toBe(0);

        expect(await resolver.payments()[0]).not.toBe(await resolver.payments()[1]);

        expect(mock.payments).toHaveBeenCalled();
    });

    it('should get payment by id', async () => {
        const id = '620f754a8b3c456847dfd5fb'
        expect(await resolver. findPaymentById(id)).toEqual({
            id: id,
            paymentAmount: 99,
            paymentMethod: "พร้อมเพย์",
            paymentStatus: true,
            paymentInvoice: "รายละเอียดใบเสร็จ"
        });

        expect(mock.findPaymentById).toHaveBeenCalled();
    })
})