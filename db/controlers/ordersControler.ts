"use server";

import DzenModelOrders from "../models/ordersModel";

export async function getOrders() {
  try {
    const data = JSON.parse(JSON.stringify(await DzenModelOrders.find()));

    return { data };
  } catch (error) {
    return { message: error };
  }
}
