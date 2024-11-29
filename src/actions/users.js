'use server'

export const getUser = async () => {
    let users = await fetch(`${process.env.BASE_URL}api/users`);
    users = await users.json();
    console.log("Users Fetched successfully");


    return users;

};