import { SubCategoryModal } from "@/lib/models/subcategory";
import { CategoryModal } from "@/lib/models/category";
import { EventModal, eventModel } from "@/lib/models/events";
import { UserModal, userModel } from "@/lib/models/users";
import { ConnectDB } from "@/lib/db/connectDB";

export async function GET(request) {
  await ConnectDB()

  // const category = request?.nextUrl?.searchParams?.get("category");
  
  // const query = {};
  // if (category) {
  //   query.category = category;
  // }
  // console.log("query=>", query);
  const events = await eventModel.find()
    .populate("category", "title")
    .populate("createdBy", "fullname email profileImg")
    .populate("subcategory", "title")
    .populate("going", "fullname email profileImg");

  return Response.json(
    {
      msg: "Events Fetched Successfully",
      events,
    },
    { status: 200 }
  );
}

export async function POST(request) {
  await ConnectDB();
  const obj = await request.json();

  const user = await userModel.findOne({ _id: obj.createdBy });
  if (!user)
    return Response.json(
      {
        error: true,
        msg: "User not found",
        data: null,
      },
      { status: 403 }
    );

  let newEvent = new eventModel(obj);
  await newEvent.save();

  return Response.json(
    {
      msg: "Event Added Successfully",
      event: newEvent,
    },
    { status: 201 }
  );
}
