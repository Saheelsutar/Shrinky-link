"use server"
import mongoose, { connect } from "mongoose"; 
const connectDB = async () => {
    try {
        const conn = await connect(`${process.env.MONGO_URL}`);

        console.log(`MongoDB Connected: ${conn}`);
    } catch (error) {
        console.log(`Connection Error:}`);

    }
};

export default connectDB;
