import mongoose from "mongoose";
import { z } from "zod";

// User Schema
const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	firstName: { type: String, required: true },
	phoneNumber: { type: String, required: true },
	password: { type: String, required: true },
});

// Restaurant Schema
const restaurantSchema = new mongoose.Schema({
	name: { type: String, required: true },
	address: { type: String, required: true },
	city: { type: String, required: true },
	pinCode: { type: Number, required: true },
	phoneNumber: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	cuisine: { type: String, required: true },
	tableCapacity: { type: Number, required: true },
	image: { type: String, required: true },
});

// RestaurantBooking Schema
const bookingSchema = new mongoose.Schema({
	restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
	userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	bookingDate: { type: Date, required: true },
	bookingTime: { type: String, required: true },
	numberOfTables: { type: Number, required: true },
	status: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

// User Model
const userModel = mongoose.model("User", userSchema);
// Restaurant Model
const restaurantModel = mongoose.model("Restaurant", restaurantSchema);
// RestaurantBooking Model
const restaurantBookingModel = mongoose.model("RestaurantBooking", bookingSchema);

// RestaurantBooking Validator
const bookingValidator = z.object({
	restaurantId: z.string().min(3),
	userId: z.string().min(3),
	bookingDate: z.date(),
	bookingTime: z.string().min(3),
	numberOfTables: z.number().min(1),
	status: z.string().min(3),
	createdAt: z.date(),
});

// User Validator
const userValidator = z.object({
	email: z.string().email(),
	firstName: z.string().min(3),
	phoneNumber: z.string().min(10).max(15),
	password: z.string().min(8),
});

// Restaurant Validator
const restaurantValidator = z.object({
	name: z.string().min(3),
	address: z.string().min(3),
	city: z.string().min(3),
	pinCode: z.number().min(6).max(6),
	phoneNumber: z.string().min(10).max(15),
	email: z.string().email(),
	cuisine: z.string().min(3),
	tableCapacity: z.number().min(1),
	image: z.string().min(3),
});

// Export the User Model and Validator
export { userModel, restaurantModel, restaurantBookingModel, bookingValidator, userValidator, restaurantValidator };
