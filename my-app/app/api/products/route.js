//bu klasorun ismi route.js olmak zorundaydi yoksa calismass
//postman url sini bunla olusturuyoruz 27. dakika https://www.youtube.com/watch?v=wNWyMsrpbz0
import connectMongoDB from "@/libs/mongodb"
import Product from "@/models/product";
import { NextResponse } from "next/server";

//DB de yeni veri yaratma
export async function POST(request) {
    const { title, description, stock } = await request.json();
    await connectMongoDB(); //libs deki mongodb de olusturuldu
    await Product.create({ title, description, stock });
    return NextResponse.json({ message: 'Product Created' }, { status: 201 })
}


//DB den tum verileri cekme
export async function GET() {
    await connectMongoDB();
    const products = await Product.find();
    return NextResponse.json({ products })

}

//delet methodu

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Product.findByIdAndDelete(id);
    return NextResponse.json({ message: "Product deleted" }, { status: 200 })
}