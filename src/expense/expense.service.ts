import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ExpenseDto } from "./dto/expense.dto";


@Injectable()
export class ExpensService{
  private expense = [
    {id:1,name:"train-ticket", price:20},
    {id:2,name:'bus-ticket',price:11}

  ]
  getAll(){
    return this.expense
  }
  createExpense(expense: ExpenseDto){
    if(!expense.name || !expense.price) throw new  HttpException("name or price is not provide",HttpStatus.BAD_REQUEST)
    const lastId= this.expense[this.expense.length-1]?.id||1
   const newExpense={
    id:lastId+1,
    ...expense
  }
  this.expense.push(newExpense)
  return newExpense
  }
  getExpenseById(id: number){
    const product = this.expense.find(el => el.id===id)
    if(!product) throw new HttpException("product not found",HttpStatus.NOT_FOUND)
    return product
  }
  deleteProduct(id: number){
    const index = this.expense.findIndex(el => el.id===id)
    if(index === -1) throw new HttpException("product not found",HttpStatus.NOT_FOUND)
    const deleteProduct = this.expense.splice(index,1)
  return deleteProduct
  }
  update(id: number, updatedData: { name?: string; price?: number }) {
  const index = this.expense.findIndex(el => el.id === id);
  if (index === -1) {
    throw new HttpException("Product not found", HttpStatus.NOT_FOUND);
  }
  const updatedExpense = {
    ...this.expense[index],
    ...updatedData            
  };
  this.expense[index] = updatedExpense;
  return updatedExpense;
}
}