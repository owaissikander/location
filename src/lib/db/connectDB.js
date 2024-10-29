import mongoose from "mongoose";



export async function ConnectDB(){


    try {
        let connection = await mongoose.connect(process.env.MONGODB_URL)
        console.info( 'connected to DB', connection)
    } catch (error) {
        console.log(error);
        
    }
}