import express from "express";
import { AzureChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});

const model = new AzureChatOpenAI({
    temperature: 0.2,
    verbose: false,
});

app.post("/ask", async (req, res) => {
    try {
        const prompt = req.body.prompt;
        const joke = await model.invoke(prompt);
        res.json({ reply: joke.content });
    } catch (error) {
        res.status(500).json({ error: "Error processing your request." });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
