//bu klasorun ismi route.js olmak zorundaydi yoksa calismass
//postman url sini bunla olusturuyoruz 27. dakika https://www.youtube.com/watch?v=wNWyMsrpbz0
import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

//DB de yeni veri yaratma
export async function POST(request) {
    const { title, description } = await request.json();
    await connectMongoDB(); //libs deki mongodb de olusturuldu
    await Topic.create({ title, description });
    return NextResponse.json({ message: 'Topic Created' }, { status: 201 })
}


//DB den tum verileri cekme
export async function GET() {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics })

}

//delet methodu

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 300 })
}