
import mongoose, { connect } from "mongoose"; // Correct for Mongoose 8
const connectDB = async () => {
    try {
        const conn = await connect("mongodb+srv://stud22sys1:mongodb@cluster0.y5kg8.mongodb.net/shrinky");

        console.log(`MongoDB Connected: ${conn}`);
    } catch (error) {
        console.log(`Connection Error:}`);

    }
};

export default connectDB;
