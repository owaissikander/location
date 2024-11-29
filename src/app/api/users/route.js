import { ConnectDB } from "@/lib/db/connectDB";
import { userModel } from "@/lib/models/users";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
export async function GET(request) {
    await ConnectDB();
    const users = await userModel.find()
    return Response.json({
        msg: "fetch successfully",
        users
    }, { status: 200 });
}

// export async function POST(request) {
//     await ConnectDB();
//     const obj = await request.json()
//     const user = await userModel.findOne({ email: obj.email })
//     if (user)
//         return Response.json({ error: true, msg: "user already existed" },
//             { status: 403 }
//         );
//     const saltRounds = 10;

//     const hashpassword = await bcrypt.hash(obj.password, saltRounds)
//     obj.password = hashpassword;
//     console.log("obj--==========-=-========================>", obj)

//     // let newUser = new userModel(obj)
//     // await newUser.save();

//     return Response.json({
//         msg: " user added successfully",
//         user: {}
//     }, { status: 201 })
// }
export async function POST(request) {
    await ConnectDB();
    const obj = await request.json();
    const user = await userModel.findOne({ email: obj.email });
    if (user) {
        return Response.json({ error: true, msg: "user already existed" }, { status: 403 });
    }
    const saltRounds = 10;

    const hashpassword = await bcrypt.hash(obj.password, saltRounds);
    obj.password = hashpassword;

    let newUser = new userModel(obj); // Uncomment this line
    await newUser.save(); // Uncomment this line


   // var token = jwt.sign({ _id: newUser._id, role: newUser.role }, process.env.JWT_KEY);

    var token = jwt.sign(
        { _id: newUser._id, role: newUser.role },
        process.env.JWT_KEY
      );
    console.log("obj==>", obj);

    return Response.json({
        msg: "user added successfully",
        user: newUser,
        token,
    }, { status: 201 });
}
export async function PUT(request) { }

export async function DELETE(request) { }

