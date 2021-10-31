import { GroupModel } from "../models/GroupModel.js"

export const GroupController = {
    getGroupById: async (req, res) => {
        const { groupId } = req.params
        try {
            const response = await GroupModel.getGroupById(groupId)
            res.send(response)
        } catch (err) {
            const response = {
				message: err.message,
				error: {
					statusCode: err.statusCode,
					stack: err.stack,
					message: err.errMessage,
				},
			}
			res.status(response.error.statusCode).send(response)
        }
	},
	getGroupByFields: async (req, res) => {
		const response = await GroupModel.getGroupByFields()
		res.send(response)
	},
	createNewGroup: async (req, res) => {
		try {
			const { groupName, description, contacts } = req.body
			const { userid } = req.headers
			const response = await GroupModel.createNewGroup(
				groupName,
				description,
				contacts,
				userid
			)
			res.send(response)
		} catch (err) {
			const response = {
				message: err.message,
				error: {
					statusCode: err.statusCode,
					stack: err.stack,
					message: err.errMessage,
				},
			}
			res.status(response.error.statusCode).send(response)
		}
	},
	updateExistingGroup: async (req, res) => {
		const response = await GroupModel.updateExistingGroup()
		res.send(response)
	},
	deleteGroup: async (req, res) => {
		try {
            const { groupId } = req.params
            console.log(groupId)
			const response = await GroupModel.deleteGroup(groupId)
			res.send(response)
		} catch (err) {
			const response = {
				message: err.message || "Internal Error",
				error: {
					statusCode: err.statusCode || 500,
					stack: err.stack,
					message: err.errMessage,
				},
			}
			res.status(response.error.statusCode).send(response)
		}
	},
}
