export interface OrdersType {
    id: number,
    title: string,
    description:{
      count:number,
      sum:{
        USD:number
        UAH:number
      }
    },
    date: string
  }


  export interface ProductsType {
    id: number,
    serialNumber: number,
    isNew: number,
    photo: string,
    title: string,
    type: string,
    specification: string,
    guarantee: {
      start:  string,
      end:  string
    },
    price: [
      {value: number, symbol:  string, isDefault: 0},
      {value: number, symbol: string, isDefault: 1}
    ],
    order: number,
    date:  string
}