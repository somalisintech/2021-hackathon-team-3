import express from "express";
import { connectDB } from "./utils/dbconfig.js";
import { userRoutes } from './routes/routes.js'
const app = express();

// Middleware 
app.use(express.json());
connectDB();

// Routes
userRoutes(app)

// Server
app.listen("8000", () => {console.log("listening at port 8000")})