"use client";


import { OrdersType } from "@/types/types";


interface OrdersComponent {
  props: OrdersType;
}

const Orders = (props: OrdersComponent) => {

  return (
    <div>
      <div className="d-flex justify-content-around item m-2">
        <div className="p-2">Title:{props.props.title} </div>
        <div className="p-2">Count:{props.props.description.count}</div>
        <div className="p-2">
          <div>"USD":{props.props.description.sum.USD}</div>
          <div>"UAH":{props.props.description.sum.UAH}</div>
        </div>
      </div>
    </div>
  );
};

export default Orders;