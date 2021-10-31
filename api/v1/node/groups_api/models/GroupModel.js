import { Group } from "../schemas/GroupSchema.js";
import { saveData} from "./utils/dbFunctions.js";
export const GroupModel = {
    getGroupById: async () => {
        return {message: "empty response" }
    },
    getGroupByFields: async() => {
        return {message: "empty response" }
    },
    createNewGroup: async () => {
        const group = new Group();
        // await saveData(group);
        return group;
    },
    updateExistingGroup: async () => {
        return {message: "empty response" }
    },
    deleteGroup: async () => {
        return {message: "empty response" }
    }
};

