import mongoose from "mongoose";
const { Schema } = mongoose;

const SchemaProducts = new Schema({
  id: {
    type: Number,
    required: [true],
  },
  serialNumber: {
    type: Number,
    required: [true],
  },
  isNew: {
    type: Number,
    required: [true],
  },
  photo: {
    type: String,
    required: [true],
  },
  title: {
    type: String,
    required: [true],
  },
  typeProduct: {
    type: String,
    required: [true],
  },
  specification: {
    type: String,
    required: [true],
  },
  guarantee: {
    start: {
      type: Date,
      required: [true],
    },
    end: {
      type: Date,
      required: [true],
    },
  },

  price: [
    {
      value: {
        type: Number,
        required: [true],
      },
      symbol: {
        type: String,
        required: [true],
      },
      isDefault: {
        type: Number,
        required: [true],
      },
    },
    {
      value: {
        type: Number,
        required: [true],
      },
      symbol: {
        type: String,
        required: [true],
      },
      isDefault: {
        type: Number,
        required: [true],
      },
    },
  ],
  order: {
    type: Number,
    required: [true],
  },
  date: {
    type: Date,
    required: [true],
  },
});

const DzenModelProd =mongoose.models.product || mongoose.model("product", SchemaProducts);


export default DzenModelProd;
