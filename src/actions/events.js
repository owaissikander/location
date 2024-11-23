'use server'

import { ConnectDB } from "@/lib/db/connectDB";
import { CategoryModel } from "@/lib/models/category";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const addEvents = async (obj) => {

    const added = await fetch(`${process.env.BASE_URL}api/events `, {
        method: "POST",
        body: JSON.stringify(obj),
    });
    if (added.ok) {
        console.log("Event added succes sfully");
        revalidatePath("/admin/event");
    }

    //     await ConnectDB();
    //    // const obj = await request.json()
    //     //console.log("obj rec===============>", obj)
    //     let newCategory = new CategoryModel(obj)
    //     await newCategory.save();
    //     redirect("/admin/categories")
}

export const getEvents = async (category) => {
    let events = await fetch(`${process.env.BASE_URL}api/events?category=${category ? category : ""}`);
    console.log( "events-=>==>-=",  events );
    
    events = await events.json();
    console.log("Events Fetched successfully");


    return events;

};



export const getSingleEvent = async (id) => {
    let event = await fetch(`${process.env.BASE_URL}api/events/${id}`, {
        
      cache: "no-cache",
    });
    console.log( "event>>>", event)

    if (event.ok) {
      event = await event.json();
      console.log("Event Fetched successfully");
      return event;
    } else {
      redirect("/not-found");
    }
    revalidatePath("/admin/categories");
  };
  
  // export const goingToEvent = async (id, userId) => {
  //   let event = await fetch(`${process.env.BASE_URL}api/events/${id}/going`, {
  //     method: "POST",
  //     body: JSON.stringify({ userId }),
  //   });
  //   if (event.ok) {
  //     revalidatePath(`/events/${id}`);
  //     // const res = await event.json();
  //     // console.log("Event Updated successfully");
  //     // return res;
  //   } else {
  //     redirect("/not-found");
  //   }
  // };