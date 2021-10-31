import { Group, GroupRole } from "../schemas/GroupSchema.js"
import { saveData, findGroupById } from "./utils/dbFunctions.js"
export const GroupModel = {
	getGroupById: async (groupId) => {
		try {
			const response = await findGroupById(groupId)
			return response
		} catch (err) {
			const error = new Error("Couldn't find group")
			error.statusCode = 400
			error.stack = err.stack
			error.errMessage = err.message

			throw error
		}
	},
	getGroupByFields: async () => {
		return { message: "empty response" }
	},
	createNewGroup: async (groupName, description, contacts, userid) => {
		try {
			console.log(groupName, description, contacts, userid)

			userid = userid.replace(/["']/g, "")
			const admin = new GroupRole({
				userid,
				Permissions: ["Write", "Delete", "Read", "Get"],
			})
			const group = new Group({
				info: {
					groupName: groupName,
					description,
					contacts,
				},
				management: [admin],
			})
			const response = await saveData(group)
			return response
		} catch (err) {
			const error = new Error("Couldn't process request")
			error.statusCode = 400
			error.stack = err.stack
			error.errMessage = err.message

			throw error
		}
	},
	updateExistingGroup: async () => {
		return { message: "empty response" }
	},
	deleteGroup: async (userid) => {
		return { message: "empty response" }
	},
}
