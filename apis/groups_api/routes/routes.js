export const groupsRoutes = (app) => {
    // Get group by id
    app.get("/group/:id", (req, res) => {
        res.status(200).send({ message: "empty response" })
    });
    // Get group by body
    app.get("/group", (req, res) => {
        res.status(200).send({ message: "empty response" })
    });

    // Create new group
    app.post("/group", (req, res) => {
        res.status(200).send({ message: "empty response" })
    });
    // Update existing group
    app.put("/group/:id", (req, res) => {
        res.status(200).send({ message: "empty response" });
    });
    // Delete a group
    app.delete("/group/:id", (req, res) => {
        res.status(200).send({message: "empty response"})
    })
};