import { ExpenseDto } from './dto/expense.dto';
import { ExpensService } from './expense.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";


@Controller("expense")
export class ExpenseController{
  constructor(private ExpensService : ExpensService){}
  @Get()
  getHello(){
    return this.ExpensService.getAll();
  }
  @Post()
  createExpense(@Body() body:ExpenseDto) {
    return this.ExpensService.createExpense(body);
  }
  @Get(":id")
  getExpenseById(@Param('id') id: string) {
    return this.ExpensService.getExpenseById(+id)
  }
  @Delete(":id")
  deleteProduct(@Param('id') id: string){
    return this.ExpensService.deleteProduct(+id)
  }
  @Patch(":id")
  update(@Param('id') id: string, @Body() updatedData: { name?: string; price?: number }) {
    return this.ExpensService.update(+id, updatedData);
  }
}