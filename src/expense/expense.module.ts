import { Module } from "@nestjs/common";
import { ExpenseController } from "./expense.controller";
import { ExpensService } from "./expense.service";


@Module({
  imports:[],
  controllers:[ExpenseController],
  providers:[ExpensService]
})
export class ExpenseModule{}