'use server'

import { ConnectDB } from "@/lib/db/connectDB";
import { CategoryModel } from "@/lib/models/category";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";




export const getUser = async () => {
    let users = await fetch(`${process.env.BASE_URL}api/users`);
    users = await users.json();
    console.log("Users Fetched successfully");


    return users;

};