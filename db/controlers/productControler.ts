"use server";

import DzenModelProd from "../models/productsModel";

export async function getProducts() {
  try {
    const data = JSON.parse(JSON.stringify(await DzenModelProd.find()));
    //const data= DzenModelProd.find().exec()
    return {data };
  } catch (error) {
    return { message: error };
  }
}

export default getProducts;
