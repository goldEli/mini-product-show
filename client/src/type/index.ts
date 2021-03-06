export interface IMenu {
  _id: string;
  index: number;
  price: number;
  unit: string;
  net?: number;
  netUnit?: string;
  title: string;
  imgSrc: string;
  onSale: boolean;
  total?: number;
}

export interface IFurnitureCategory {
  _id: string;
  name: string;
  index: number;
  seleted?: boolean; 
}

export interface IFurniture {
  _id?: string;
  furnitureCategoryId?: string;
  imgSrc?: string;
  index?: number;
  note?: string;
  onSale?: boolean;
  price?: number;
  title?: string;
  number?: number;
  total?: number;
  material?: string;
  stock?: string;
}

export interface IExpress {
  name: string;
  phone: string;
  address: string;
  express: string;
  expressPhone: string;
}

export interface IMaterial {
  name: string;
  active: boolean;
}

export interface IMenuListItem {
  category: IFurnitureCategory;
  funitureList: IFurniture[];
}
