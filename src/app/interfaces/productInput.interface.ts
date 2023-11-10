export interface ProductInterface {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  inputs: InputInterface[];
}

export interface OptionInterface {
  id: number;
  name: string;
}

export interface InputInterface {
  id: number;
  name: string;
  type: 'TEXT' | 'NUMBER' | 'SELECT';
  options?: OptionInterface[];
}
