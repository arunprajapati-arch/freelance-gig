import express from "express";
import cors from "cors";
import { routes } from "./routes/routes";
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/', routes);







export default app;