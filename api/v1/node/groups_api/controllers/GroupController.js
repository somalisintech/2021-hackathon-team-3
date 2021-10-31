import { GroupModel } from "../models/GroupModel.js"

export const GroupController = {
    getGroupById: async (req, res) => {
        const response = await GroupModel.getGroupById()
        res.send(response)
    },
    getGroupByFields: async(req,res) => {
        const response = await GroupModel.getGroupByFields()
        res.send(response)
    },
    createNewGroup: async (req, res) => {
        const { groupName, description, contacts} = req.body
        console.log(groupName, description, contacts)
        const { userid } = req.headers
        const response = await GroupModel.createNewGroup(groupName, description, contacts, userid)
        res.send(response)
    },
    updateExistingGroup: async (req, res) => {
        const response = await GroupModel.updateExistingGroup()
        res.send(response)
    },
    deleteGroup: async (req, res) => {
        const response = await GroupModel.deleteGroup()
        res.send(response)
    }
};
