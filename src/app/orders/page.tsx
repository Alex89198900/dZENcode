"use client";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addOrders } from "@/store/Features/orders/orderSlice";
import { getOrders } from "../../../db/controlers/ordersControler";
import Orders from "../../components/Orders";
import getProducts from "../../../db/controlers/productControler";
import { addProducts } from "@/store/Features/products/productSlice";
import NavigationMenu from "../../components/NavigationMenu";
import Header from "../../components/Header";
import ModalOrder from "@/components/ModalOrder";
import { triggerOrder } from "@/store/Features/trigger/orderTrigger";
import { addProductsOrder } from "@/store/Features/products/productsOrder";
import { infoShowAdd } from "@/store/Features/orders/infoShow";

const OrdersPage = () => {
  const orders = useAppSelector((state: RootState) => state.orders);
  const  products = useAppSelector((state: RootState) => state.productsOrder);
  const  triggerOrd = useAppSelector((state: RootState) => state.orderTrigger);
  const  showInfo = useAppSelector((state: RootState) => state.infoShow);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const orders = await getOrders();
      const products = await getProducts();
      dispatch(addOrders(orders.data));
      dispatch(addProducts(products.data));
      dispatch(triggerOrder(false));
      if (!orders) window.location.reload;
    };
    fetchData();
  }, [dispatch,triggerOrd]);

  const orderInfoClose=()=>{
    dispatch(infoShowAdd(false))
  }
  return (
    <main className="h-100 ">
      <Header />
      <div className="d-flex calcHeight w-100">
        <NavigationMenu />
        <div className="d-flex w-100 flex-xl-column p-3 overflow-auto bg-secondary-subtle z-1">
        <div className="d-flex justify-content-xl-end align-items-lg-center gap-3 mb-5">
        <ModalOrder _id={""} id={0} title={""} description={{
            count: 0,
            sum: {
              USD: 0,
              UAH: 0
            }
          }} date={""} />
          </div>
          <div className="row ">
            <div className="d-flex flex-column gap-3 col">
            {orders.map((item, index) => (
              <div  key={item._id}>
                <Orders props={item} />
              </div>
            ))}
            </div>
            {showInfo.value && 
            <div className="col">
            <button className="btn-flot close" onClick={ orderInfoClose}></button>
            <ul className="d-flex flex-column gap-3 col">{products.map((item)=>(
              <li  key={item._id} className="d-flex justify-content-between text-center align-items-center item bg-light shadow-sm rounded p-2 gap-3">
              <p>{item.title}</p>
              </li>
            ))}</ul>
            </div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrdersPage;
