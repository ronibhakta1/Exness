import { Router } from "express";

const router = Router();


// Respond to GET /api/v1/ with a simple message
router.get("/", (req, res) => {
    res.send("API is running...");
});

// Respond to POST /api/v1/data
router.post("/data", (req, res) => {
    res.send("API is running...");
});

export default router;
