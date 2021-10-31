import mongoose from "mongoose"
import MUUID from "uuid-mongodb"
const groupUUID = uuidv4()
const Schema = mongoose.Schema
import { v4 as uuidv4 } from 'uuid';

const GroupSchema = new Schema({
        id: {
            type: String,
            required: true,
            default: groupUUID
        },
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