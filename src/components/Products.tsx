"use client";
import { ProductsType } from "@/types/types";
import ModalProduct from "./ModalProduct";
import { deleteProduct } from "../../db/controlers/productControler";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { triggerProduct } from "../store/Features/trigger/productTrigger";

interface ProductsComponent{
    props: ProductsType
}




const Products = (props: ProductsComponent) => {
  const dispatch = useAppDispatch();
 
  const  handleDell= async(id:string)=>{
    await deleteProduct(id)
    dispatch(triggerProduct(true));
    //window.location.reload();
    }
  return (
    <div className=" propduct d-flex justify-content-between  text-center align-items-center item bg-light shadow-sm rounded p-2" >
   <div className="col-1">Title: {props.props.title}</div>
   <div className="col-1">Type: {props.props.typeProduct??''}</div>
   <div className="d-flex flex-column gap-1 col-4">
    <div>Guarantee start: {props.props.guarantee.start.split(".")[0]}</div>
    <div>Guarantee end: {props.props.guarantee.end.split(".")[0]}</div>
   </div>
   <div className="d-flex flex-column gap-1 col-2">
   <div>"USD": {props.props.price[0].value}</div>
   <div>"UAH": {props.props.price[1].value}</div> 
    </div>
    <div  className="d-flex justify-content-xl-end align-items-lg-center col-2 gap-3">
    <button className="btn btn-outline-success" onClick={async()=> await handleDell(props.props._id)} >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
    </svg>
    </button>
    <ModalProduct {...props.props}/>
    </div>
    </div>
  );
};

export default Products;
