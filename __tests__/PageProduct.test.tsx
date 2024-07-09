import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import ProductsPage from "../src/app/page";
import { Providers } from "@/store/provider";


test('renders Orders', () => {
 act(() => {
    render(
        <Providers  >
            <ProductsPage />
         </Providers>
    );
  });
});
