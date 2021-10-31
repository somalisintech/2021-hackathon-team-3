import { UserModel } from "../models/UserModel.js"

export const UserController = {
    findUserByFields: async (req, res) => {
		const response = await UserModel.findUserByFields()
		res.send(response)
    },
    findUserById: async (req, res) => {
		const response = await UserModel.findUserById()
		res.send(response)
	},
	updateExistingUser: async (req, res) => {
		const response = await UserModel.updateExistingUser()
		res.send(response)
	},
	deleteUser: async (req, res) => {
		const response = await UserModel.deleteUser()
		res.send(response)
	},
}
