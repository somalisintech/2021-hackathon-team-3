import express from "express";
import { connectDB } from "./utils/dbconfig.js";
import { groupsRoutes } from './routes/routes.js'
const app = express();

// Middleware 
app.use(express.json());
connectDB();

// Routes
groupsRoutes(app)

// Server
app.listen("3000", () => {console.log("listening at port 3000")})