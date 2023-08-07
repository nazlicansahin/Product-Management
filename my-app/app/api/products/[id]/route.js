import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

//id ile guncelleme
export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description, newStock: stock } = await request.json();
    await connectMongoDB();
    await Product.findByIdAndUpdate(id, { title, description, stock });
    return NextResponse.json({ message: "Product updated" }, { status: 200 });
}
//id ile bir konuya ulasma

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const product = await Product.findOne({ _id: id });
    return NextResponse.json({ product }, { status: 200 })
}
