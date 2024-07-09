import React from "react";
import { render, screen } from "@testing-library/react";
import Orders from "../src/components/Orders";
import { Providers } from "@/store/provider";
import { OrdersType } from "@/types/types";

const mockData:OrdersType = {
  _id: "",
  id: 2,
  title: "Product 22",
  description: {
    count: 2,
    sum: {
      USD: 200,
      UAH: 8200,
    },
  },
  date: "2017-06-29 12:09:33",
};

test('renders Orders', () => {
  render(
    <Providers  >
    <Orders props={mockData} />
    </Providers>
  
  );
});
