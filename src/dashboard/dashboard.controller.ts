import { RevenuesService } from './../revenues/revenues.service';
import { ExpensesService } from './../expenses/expenses.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';

@Controller('dashboard')
export class DashboardController {
  constructor(
    private readonly expensesService: ExpensesService,
    private readonly revenuesService: RevenuesService,
  ) { }

  @Get()
  async findAll() {
    const allExpenses = this.expensesService.findAll();
    const allRevenues = this.revenuesService.findAll();

    let totalRevenues = 0;
    let totalExpenses = 0;

    (await allRevenues).forEach((chave) => {
      totalRevenues += chave.value;
    });

    (await allExpenses).forEach((chave) => {
      totalExpenses += chave.value;
    });

    return {
      outputs: totalExpenses.toFixed(2),
      inputs: totalRevenues.toFixed(2),
    };
  }
}
