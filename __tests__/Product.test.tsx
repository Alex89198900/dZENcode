import React from "react";
import { render } from "@testing-library/react";
import Products from "../src/components/Products";
import { Providers } from "@/store/provider";
import { ProductsType } from "@/types/types";

const mockData:ProductsType = {
    _id: '',
    id: 1,
    serialNumber: 123,
    isNew: 1,
    photo: 'photo',
    title: 'product',
    typeProduct: 'phone',
    specification: '',
    guarantee: {
      start:"2017-06-29 12:09:33",
      end:"2017-06-29 12:09:33"
    },
    price: [
        {value: 100, symbol: "USD", isDefault: 0},
        {value: 2600, symbol: "UAH", isDefault: 1}
    ],
    order: 1,
    date: "2017-06-29 12:09:33"
  }
   

test('renders Orders', () => {
  render(
    <Providers  >
    <Products props={mockData} />
    </Providers>
  
  );
});