import { ConnectDB } from "@/lib/db/connectDB";
import { userModel } from "@/lib/models/users";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";


export async function POST(request) {
    await ConnectDB();
    const obj = await request.json();
    const user = await userModel.findOne({ email: obj.email });
    if (!user) {
        return Response.json({ error: true, msg: "user not found" }, { status: 403 });
    }

    const isPasswordValid = await bcrypt.compare(obj.password, user.password)
    if (!isPasswordValid) return Response.json({ error: true, msg: "password is not valid" }, { status: 403 });



    var token = jwt.sign(
        { _id: user._id, role: user.role },
        process.env.JWT_KEY
    );

    return Response.json({
        msg: "user Login successfully",
        user, 
        token,
    }, { status: 200 });
}