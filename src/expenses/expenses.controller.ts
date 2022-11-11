import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expenseService: ExpensesService) { }

  @Post()
  create(@Body() createExpensesDto: CreateExpenseDto) {
    return this.expenseService.create(createExpensesDto);
  }

  @Get()
  findAll() {
    return this.expenseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expenseService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateExpensesDto: UpdateExpenseDto) {
    return this.expenseService.update(id, updateExpensesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expenseService.remove(id);
  }
}
