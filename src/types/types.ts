export interface OrdersType {
  _id: string;
  id: number;
  title: string;
  description: {
    count: number;
    sum: {
      USD: number;
      UAH: number;
    };
  };
  date: string;
}

export interface ProductsType {
  _id: string;
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  typeProduct: string;
  specification: string;
  guarantee: {
    start: string;
    end: string;
  };
  price: [
    { value: number; symbol: string; isDefault: 0 },
    { value: number; symbol: string; isDefault: 1 }
  ];
  order: number;
  date: string;
}

export interface OrdersTypeDB {
  _id: string;
  id: number;
  title: string;
  count: number;
  USD: number;
  UAH: number;
}

export interface ProductsTypeDB {
  _id: string;
  title: string;
  type: string;
  specification: string;
  guaranteeStart: string;
  guaranteEnd: string;
  USD: number;
  UAH: number;
  order: number;
}

