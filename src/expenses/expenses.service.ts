import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Expense, ExpenseSchema } from './entities/expense.entity';
import { Model } from 'mongoose';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectModel(Expense.name) private expenseModel: Model<Expense>,
  ) { }

  async create(CreateExpenseDto: CreateExpenseDto) {
    const resp = new this.expenseModel(CreateExpenseDto);
    return resp.save();
  }

  async findAll() {
    return this.expenseModel.find().exec();
  }

  async findOne(id: string) {
    return this.expenseModel.findById(id).exec();
  }

  async update(id: string, UpdateExpenseDto: UpdateExpenseDto) {
    const resp = this.expenseModel
      .findByIdAndUpdate(id, UpdateExpenseDto)
      .exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    const resp = await this.expenseModel.findOneAndDelete({ _id: id });
    return (await resp).remove();
  }
}
