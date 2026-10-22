import "dotenv/config";
import { connectDB } from "./config/db.js";
import app from "./app.js";
//............
//DATABASE CONNECT
//............


connectDB();

//............
//START SERVER
//............

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


//............
//ERROR HANDELLING
//............

process.on("unhandledRejection", (err) => {
    console.error(`unhandeled Rejection: ${err.messege}`);
    server.close(() => process.exit(1));
});

process.on("uncaughtException", (err) => {
    console.error(`uncaught Exception: ${err.messege}`);
    server.exit(1);
});

export default server;