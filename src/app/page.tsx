"use client";
import { useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import getProducts from "../../db/controlers/productControler";
import { addProducts } from "@/store/Features/products/productSlice";
import Products from "@/components/Products";
import { ProductsType } from "@/types/types";
import NavigationMenu from "../components/NavigationMenu";
import Header from "../components/Header";
import ModalProduct from "@/components/ModalProduct";
import { triggerProduct } from "@/store/Features/trigger/productTrigger";

const ProductsPage = () => {
  const products = useAppSelector((state: RootState) => state.products);
  const  triggerProd = useAppSelector((state: RootState) => state.productTrigger);
  const [info, setinfo] = useState<ProductsType[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const prod = await getProducts();
      setinfo(prod.data);
      dispatch(addProducts(prod.data));
      dispatch(triggerProduct(false));
      if (!prod) window.location.reload;
    };
    fetchData();
  }, [dispatch, triggerProd]);
  const sortProducts = (event: { target: { value: string } }) => {
    event.target.value === "all"
      ? dispatch(addProducts(info))
      : dispatch(
          addProducts(
            info.filter((item) => item.typeProduct === event.target.value)
          )
        );
  };
  return (
    <main className="h-100 ">
      <Header />

      <div className="d-flex calcHeight" >
        <NavigationMenu />

        <div className="d-flex w-100 flex-xl-column p-3  marginContent bg-secondary-subtle z-1">
          <div className="d-flex justify-content-xl-end gap-3 mb-5">
          <select
            className="form-select w-25 marginContent"
            aria-label="Default select example"
            onChange={sortProducts}
          >
            <option value="all">All products</option>
            <option value="Monitors">Monitors</option>
            <option value="Phones">Phones</option>
          </select>
          <ModalProduct
            _id={""}
            id={0}
            serialNumber={0}
            isNew={0}
            photo={""}
            title={""}
            typeProduct={""}
            specification={""}
            guarantee={{
              start: "",
              end: "",
            }}
            price={[
              { value: 0, symbol: "USD", isDefault: 0 },
              { value: 0, symbol: "UAH", isDefault: 1 },
            ]}
            order={0}
            date={""}
          />
          </div>
          <div className="d-flex flex-column gap-3">
          {products.map((item) => (
            <Products props={item} key={item._id} />
          ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
