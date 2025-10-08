import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);
//turns the schema into a model — a class you can use to interact with the MongoDB collection.
//"Product" → The name of the collection in MongoDB (Mongoose will pluralize it to "products" automatically).
const Product = mongoose.model("Product", productSchema);
//the default keyword allows the module to be imported with any name, doesn't have to be "Product"
export default Product;
