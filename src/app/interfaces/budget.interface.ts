export interface BudgetInterface {
  id: number;
  productId: number;
  product: ProductsBudgetInterface;
  budgetFields: BudgetFieldInterface[];
}

export interface ProductsBudgetInterface {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface BudgetFieldInterface {
  id: number;
  value: string;
  inputId: number;
  budgetId: number;
}
