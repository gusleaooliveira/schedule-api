import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class Expense extends Document {
    @Prop()
    date: Date;

    @Prop()
    value: number;

    @Prop()
    type: string;

    @Prop()
    tag: string;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
