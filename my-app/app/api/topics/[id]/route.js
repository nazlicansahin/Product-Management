import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

//id ile guncelleme
export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}
//id ile bir konuya ulasma

export async function GET(requet, { params }) {
    const { id } = params;
    await connectMongoDB();
    const topic = await Topic.findOne({ _id: id });
    return NextResponse.json({ topic }, { status: 200 })
}
