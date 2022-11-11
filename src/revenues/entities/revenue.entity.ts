import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class Revenue extends Document {
    @Prop()
    value: number;

    @Prop()
    date: Date;

    @Prop()
    type: string;
}

export const RevenueSchema = SchemaFactory.createForClass(Revenue);
