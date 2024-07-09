"use server";

import { ProductsTypeDB } from "@/types/types";
import DzenModelProd from "../models/productsModel";

export async function getProducts() {
  try {
    const data = JSON.parse(JSON.stringify(await DzenModelProd.find()));
    return { data };
  } catch (error) {
    return { message: error };
  }
}

export default getProducts;

export async function deleteProduct(id: string) {
  try {
    await DzenModelProd.deleteOne({ _id: id });
  } catch (error) {
    return { message: error };
  }
}

export async function createProduct(props: ProductsTypeDB) {
  try {
    await DzenModelProd.insertMany({
      id: 1,
      serialNumber: 1234,
      isNew: 1,
      photo: "pathToFile.jpg",
      title: props.title,
      typeProduct: props.type,
      specification: props.specification,
      guarantee: {
        start: props.guaranteeStart,
        end: props.guaranteEnd
      },
      price: [
        {value:props.USD, symbol: "USD", isDefault: 0},
        {value:props.UAH, symbol: "UAH", isDefault: 1}
      ],
      order:props.order,
      date: new Date()
    
      
    });
  } catch (error) {
    return { message: error };
  }
}

export async function updateProduct(props: ProductsTypeDB) {
  try {
    const item = await DzenModelProd.findOne({ _id: props._id });
    await item.updateOne({
      title: props.title,
      typeProduct: props.type,
      specification: props.specification,
      guarantee: {
        start: props.guaranteeStart,
        end: props.guaranteEnd
      },
      price: [
        {value: props.USD, symbol: "USD", isDefault: 0},
        {value: props.UAH, symbol: "UAH", isDefault: 1}
      ],
      order: 1,
      date: "2017-06-29 12:09:33"
    },
  );
  } catch (error) {
    return { message: error };
  }
}
