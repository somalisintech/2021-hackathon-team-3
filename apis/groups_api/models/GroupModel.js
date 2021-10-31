import { Group, GroupRole } from "../schemas/GroupSchema.js"
import { saveData } from "./utils/dbFunctions.js"
export const GroupModel = {
	getGroupById: async () => {
		return { message: "empty response" }
	},
	getGroupByFields: async () => {
		return { message: "empty response" }
	},
    createNewGroup: async (groupname, description, contacts, userid, full_name, alias) => {
        const admin = new GroupRole({
            userid: {
                full_name,
                Alias: alias,
                Permission: ['Write','Delete', 'Read', 'Get']
            }
        })
		const group = new Group({
			info: {
				groupName: groupname,
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
