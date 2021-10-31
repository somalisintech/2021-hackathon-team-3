import { UserController } from "../controllers/UserController.js";

export const userRoutes = (app) => {
    // Update existing user
    app.put("/user/:UserId", (req, res) => {
        UserController.updateExistingUser(req,res)
    });
    // Delete a group
    app.delete("/user/:UserId", (req, res) => {
        UserController.deleteUser(req,res)
    })
};