export interface ProductInterface {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  inputs: ProductInputInterface[];
}

export interface ProductInputInterface {
  id: number;
  name: string;
  type: string;
}
