import { UserModel } from "../models/UserModel.js"

export const UserController = {
	updateExistingUser: async (req, res) => {
		const response = await UserModel.updateExistingUser()
		res.send(response)
	},
	deleteUser: async (req, res) => {
		const response = await UserModel.deleteUser()
		res.send(response)
	},
}
