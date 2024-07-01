import mongoose from "mongoose";
const { Schema } = mongoose;

const SchemaOrders = new Schema({
  id: {
    type: Number,
    required: [true],
  },

  title: {
    type: String,
    required: [true],
  },

  description: {
    count:{
      type: Number,
      required: [true],
    },
    sum:{
      USD:{
        type: Number,
        required: [true],
      },
      UAH:{
        type: Number,
        required: [true],
      }
    }
  },
  date: {
    type: Date,
    required: [true],
  },
});

const DzenModelOrders = mongoose.models.order || mongoose.model("order", SchemaOrders);

export default DzenModelOrders;


