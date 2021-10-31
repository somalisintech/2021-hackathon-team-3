import mongoose from "mongoose"
import MUUID from "uuid-mongodb"
const groupUUID = MUUID.v1()
const Schema = mongoose.Schema

const GroupSchema = new Schema({
    info: {
        groupName: {
            type: String,
            required: true    //ADD
        },
        description: {
            type: String,
            required: true     // ADD
        },
        contacts: {type: [String], required: true}, // Not working   // ADD
        createdDate: {
            type: Date,
            required: true,
            default: Date.now()
        }
    },
    management: {
        type: Array,
        required: true,
    },
    meta: {
        createdDate: {
            type: Date,
            required: true,
            default: Date.now()
        },
        deletedDate: {
                type: Date,
        },
        id: {
            type: String,
            required: true,
            default: groupUUID
        },
        notvoid: {
            type: Boolean,
            default: true,
        }
    }

});

export const Group = mongoose.model("Group", GroupSchema);


const GroupRoleSchema = new Schema({
    userid: {
        type: String,
        required: true
        },
        full_name: {
            type: String,
        },
        Alias: {
            type: String,
        },
        Permissions: {
            required: true,
            type: [String],
        }
})

export const GroupRole = mongoose.model("GroupRole", GroupRoleSchema);