import { ConnectDB } from "@/lib/db/connectDB";
import { userModel } from "@/lib/models/users";

export async function GET(request) {
    await ConnectDB();
    const users = await userModel.find()
    return Response.json({
        msg: "fetch successfully",
        users
    }, { status: 200 });
}

export async function POST(request) {
    await ConnectDB();
    const obj = await request.json()
    let newUser = new userModel(obj)
    await newUser.save();

    return Response.json({
        msg: " user added successfully",
        user: newUser
    }, { status: 201 })
}

export async function PUT(request) { }

export async function DELETE(request) { }

