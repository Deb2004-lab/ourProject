import mongoose from "mongoose";

export const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Project_Manage_System"
    }).then(() => {
        console.log("connected to database.")
    }).catch(err => {
        console.log("Database connection faild.", err);
    });
};
