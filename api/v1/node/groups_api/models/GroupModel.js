import { Group, GroupRole } from "../schemas/GroupSchema.js"
import { saveData } from "./utils/dbFunctions.js"
export const GroupModel = {
	getGroupById: async () => {
		return { message: "empty response" }
	},
	getGroupByFields: async () => {
		return { message: "empty response" }
	},
	createNewGroup: async (groupName, description, contacts, userid) => {
		console.log(groupName, description, contacts, userid)

		userid = userid.replace(/["']/g, "");
        const admin = new GroupRole({ 
				userid,
                Permissions: ['Write','Delete', 'Read', 'Get']
        })
		const group = new Group({
			info: {
				groupName: groupName,
				description,
				contacts,
			},
			management: [ admin ],
		})
        const response = await saveData(group);
		return response
	},
	updateExistingGroup: async () => {
		return { message: "empty response" }
	},
	deleteGroup: async () => {
		return { message: "empty response" }
	},
}
