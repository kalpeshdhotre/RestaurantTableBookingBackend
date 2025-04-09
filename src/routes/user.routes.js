import express from "express";
import { userModel, userValidator } from "../dbModels.js";

const router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello World!");
});

router.get("/delete", (req, res) => {
	res.send("User Deleted Successfully!");
});

router.get("/create", async (req, res) => {
	try {
		const userData = userValidator.parse(req.body);
		const { email, firstName, phoneNumber } = userData;

		const user = new userModel({
			email,
			firstName,
			phoneNumber,
		});

		await user.save();
		res.status(201).json({ message: "User created successfully!" });
	} catch (error) {
		console.error("Validation or save error:", error);
		return res.status(400).json({ error: "Could not save" });
	}

	// res.send(`Hello World! ${string} from ${address}`);
});

export default router;
