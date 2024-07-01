"use client";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addOrders } from "@/store/Features/orders/orderSlice";
import { getOrders } from "../../../db/controlers/ordersControler";
import Orders from "../../components/Orders";
import getProducts from "../../../db/controlers/productControler";
import { addProducts } from "@/store/Features/products/productSlice";
import NavigationMenu from "../../components/NavigationMenu";
import Header from "../../components/Header";

const OrdersPage = () => {
  const orders = useAppSelector((state: RootState) => state.orders);

  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const orders = await getOrders();
      const products = await getProducts();
      dispatch(addOrders(orders.data));
      dispatch(addProducts(products.data));
      if(!orders)window.location.reload
    };
    fetchData();
   
  }, [dispatch]);
  
 

  return (
    <main className="h-100 ">
      <Header />
      <div className="d-flex h-100">
        <NavigationMenu />
        <div className="d-flex w-100 flex-xl-column p-3 overflow-auto marginContent">
          <div>
            {orders.map((item, index) => (
              <div key={index}>
                <Orders key={index} props={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrdersPage;
