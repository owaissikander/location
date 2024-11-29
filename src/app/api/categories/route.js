import { ConnectDB } from "@/lib/db/connectDB";
import { CategoryModel } from "@/lib/models/category";

export async function GET(request) {
    await ConnectDB();
    const Categories = await CategoryModel.find()
    return Response.json({
        msg: "fetch Categories successfully",
        Categories
    }, { status: 200 });
}

export async function POST(request) {
    const obj = await request.json()
    await ConnectDB();
    let newCategory = new CategoryModel(obj)
    await newCategory.save();

    return Response.json({
        msg: " newCategory added successfully",
        Categories: "newCategory"
    }, { status: 201 })
}
