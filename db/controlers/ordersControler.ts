"use server";

import {OrdersTypeDB } from "@/types/types";
import DzenModelOrders from "../models/ordersModel";

export async function getOrders() {
  try {
    const data = JSON.parse(JSON.stringify(await DzenModelOrders.find()));

    return { data };
  } catch (error) {
    return { message: error };
  }
}

export async function deleteOrder(id: string) {
  try {
    await DzenModelOrders.deleteOne({ _id: id });
  } catch (error) {
    return { message: error };
  }
}

export async function createOrder(props: OrdersTypeDB) {
  try {
    await DzenModelOrders.insertMany({
      id: props.id,
      title: props.title,
      description: {
        count: props.count,
        sum: {
          USD: props.USD,
          UAH: props.UAH,
        },
      },
      date: new Date(),
    });
  } catch (error) {
    return { message: error };
  }
}

export async function updateOrder(props: OrdersTypeDB) {
  try {
    const item = await DzenModelOrders.findOne({ _id: props._id });
    await item.updateOne({
      id: props.id,
      title: props.title,
      description: {
        count: props.count,
        sum: {
          USD: props.USD,
          UAH: props.UAH,
        },
      },
      date: new Date(),
    });
  } catch (error) {
    return { message: error };
  }
}
