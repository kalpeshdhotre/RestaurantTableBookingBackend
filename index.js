import mongoose from "mongoose";
import userRouters from "./src/routes/user.routes.js";
import express from "express";

const app = express();
const PORT = 3000;

mongoose.connect(`mongodb://localhost:27017/restaurantBooking`);

app.use(express.json());
app.use("/users", userRouters);

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
