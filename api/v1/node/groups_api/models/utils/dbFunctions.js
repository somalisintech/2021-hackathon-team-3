import { Group } from "../../schemas/GroupSchema.js"

export const saveData = async (data) => {
	return new Promise((resolve, reject) => {
		data.save((queryError, queryResults) => {
			if (queryError) {
				reject(queryError)
			}
			resolve(queryResults)
		})
	})
}