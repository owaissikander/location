import mongoose from "mongoose";


let isConnected = false
export async function ConnectDB() {


    try {
        if (isConnected) {
            return
        }
        let connection = await mongoose.connect(process.env.MONGODB_URL)
        console.log('connected to DB')
        isConnected = true
    } catch (error) {
        console.log(error);

    }
}