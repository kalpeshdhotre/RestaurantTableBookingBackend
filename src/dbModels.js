import mongoose from "mongoose";
import { z } from "zod";

const userSchema = new mongoose.Schema({
	email: String,
	firstName: String,
	phoneNumber: String,
});

const userModel = mongoose.model("User", userSchema);

const userValidator = z.object({
	email: z.string().email(),
	firstName: z.string().min(3),
	phoneNumber: z.string().min(10).max(15),
});

export { userModel, userValidator };
