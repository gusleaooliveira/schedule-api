import { ExpensesModule } from './../expenses/expenses.module';
import { RevenuesService } from './../revenues/revenues.service';
import { ExpensesService } from './../expenses/expenses.service';
import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { RevenuesModule } from 'src/revenues/revenues.module';

@Module({
  imports: [ExpensesModule, RevenuesModule],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule { }
