import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import OrdersPage from "../src/app/orders/page";
import { Providers } from "@/store/provider";
import ReactDOM from "react-dom";


test('renders Orders', () => {
      act(() => {
        render(
            <Providers  >
                 <OrdersPage />
             </Providers>
        );
      });

});
