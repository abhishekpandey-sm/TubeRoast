import express, { type Express } from "express";

const app: Express = express();

app.use(express.json())

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "TubeRoast API is running"
    })
})

export default app;