import { MongooseModule } from '@nestjs/mongoose';

export const dbService = MongooseModule.forRoot('mongodb+srv://raatchaapol:Na-Pt-1199946713@cluster0.ounut.mongodb.net/paypai?retryWrites=true&w=majority')
