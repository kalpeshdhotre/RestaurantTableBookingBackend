import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello World!");
});

router.get("/delete", (req, res) => {
	res.send("User Deleted Successfully!");
});

router.get("/create", (req, res) => {
	const string = req.query.name;
	const address = req.body.address;
	res.send(`Hello World! ${string} from ${address}`);
});

export default router;
