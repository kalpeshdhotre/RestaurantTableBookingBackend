import express from "express";
import { userModel, userValidator } from "../dbModels.js";

const router = express.Router();

// Create a new user
router.post("/create", async (req, res) => {
	try {
		const userData = userValidator.parse(req.body);
		const { email, firstName, phoneNumber, password } = userData;

		const user = new userModel({
			email,
			firstName,
			phoneNumber,
			password,
		});

		await user.save();
		res.status(201).json({ message: "User created successfully!" });
	} catch (error) {
		console.error("Validation or save error:", error);
		res.status(400).json({ error: "Could not save" });
	}
});

router.get("/", (req, res) => {
	res.send("Hello World!");
});

router.delete("/delete", (req, res) => {
	res.send("User Deleted Successfully!");
});

export default router;
