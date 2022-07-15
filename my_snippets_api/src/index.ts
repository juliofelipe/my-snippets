import express from "express";

// import { snippetsRoutes } from "./routes/snippets.routes";

const app = express();

app.use(express.json());

// app.use("/snippets", snippetsRoutes);

export { app };
