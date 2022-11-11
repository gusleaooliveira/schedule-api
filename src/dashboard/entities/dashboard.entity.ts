import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class Dashboard extends Document {
    @Prop()
    entries: number;

    @Prop()
    outputs: number;

    @Prop()
    balance: number;
}

export const DashboardSchema = SchemaFactory.createForClass(Dashboard);
