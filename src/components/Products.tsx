"use client";
import { ProductsType } from "@/types/types";

interface ProductsComponent{
    props: ProductsType
}

const Products = (props: ProductsComponent) => {
console.log(props.props.guarantee.start)
  return (
    <div className="d-flex justify-content-around item m-2" >
   <div className="p-2">Title: {props.props.title}</div>
   <div className="p-2">Type: {props.props.type}</div>
   <div>
   <div className="p-2">Guarantee start: {props.props.guarantee.start}</div>
   <div className="p-2">Guarantee end: {props.props.guarantee.end}</div>
   </div>
   <div className="p-2">
   <div>"USD": {props.props.price[0].value}</div>
   <div>"UAH": {props.props.price[1].value}</div>
   </div>
    </div>
  );
};

export default Products;
