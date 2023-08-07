import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
    {
        title: String,
        description: String,
        stock: Number,
    },
    {
        timestamps: true, //input kismisi
    }
);
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;//api products route da kullaniyoruz 