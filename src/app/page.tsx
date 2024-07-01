"use client";
import { useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import {  useAppSelector } from "../store/hooks";
import getProducts from "../../db/controlers/productControler";
import { addProducts } from "@/store/Features/products/productSlice";
import Products from "@/components/Products";
import { ProductsType } from "@/types/types";
import NavigationMenu from "../components/NavigationMenu";
import Header from "../components/Header";

const ProductsPage = () => {
  const products = useAppSelector((state: RootState) => state.products);
  const [info, setinfo] = useState<ProductsType[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const prod = await getProducts();
      setinfo(prod.data);
      dispatch(addProducts(prod.data));
      if(! prod)window.location.reload
    };
    fetchData();
    
  }, [dispatch]);
  const sortProducts = (event: { target: { value: string; }; }) => {
    event.target.value === "all"
      ? dispatch(addProducts(info))
      : dispatch(
          addProducts(info.filter((item) => item.type === event.target.value))
        );
  };

  return (
    <main className="h-100 ">
      <Header />

      <div className="d-flex h-100">
        <NavigationMenu />

        <div className="d-flex w-100 flex-xl-column p-3  marginContent">
          <select
            className="form-select w-25 marginContent"
            aria-label="Default select example"
            onChange={sortProducts}
          >
            <option value="all">All products</option>
            <option value="Monitors">Monitors</option>
            <option value="Phones">Phones</option>
          </select>
          {products.map((item, index) => (
            <Products props={item} key={index} />
          ))}
        </div>
      </div>
      
    </main>
  );
};

export default ProductsPage;
