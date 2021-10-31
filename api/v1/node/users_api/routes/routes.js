import { UserController } from "../controllers/UserController.js";

export const userRoutes = (app) => {
    // Update existing user
    app.put("/user/:UserId", (req, res) => {
        UserController.updateExistingUser(req,res)
    });
    // Delete a group
    app.delete("/user/:UserId", (req, res) => {
        UserController.deleteUser(req, res)
    });
    // Find users by fields
    app.get("/user", (req, res) => {
        UserController.findUserByFields(req,res)
    })
    // Find user by Id
    app.get("/user/:UserId", (req, res) => {
        UserController.findUserById(req,res)
    })
};