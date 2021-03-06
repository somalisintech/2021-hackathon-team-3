import { GroupController } from "../controllers/GroupController.js";

export const groupsRoutes = (app) => {
    // Get group by id
    app.get("/group/:id", (req, res) => {
        GroupController.getGroupById(req,res)
    });
    // Get group by body
    app.get("/group", (req, res) => {
        GroupController.getGroupByFields(req,res)
    });

    // Create new group
    app.post("/group", (req, res) => {
        GroupController.createNewGroup(req,res)
    });
    // Update existing group
    app.put("/group/:id", (req, res) => {
        GroupController.updateExistingGroup(req,res)
    });
    // Delete a group
    app.delete("/group/:id", (req, res) => {
        GroupController.deleteGroup(req,res)
    })
};