import mongoose from "mongoose"
import MUUID from "uuid-mongodb"
const groupUUID = MUUID.v1()
const userUUID = MUUID.v1()
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
        default: {
            userId: {
                type: Object,
                required: true,
                full_name: {
                    type: String,
                    required: true,
                },
                Alias: {
                    type: String,
                    default: "hi"
                },
                Permission: {
                    required: true,
                    type: [String],
                    enum: ['Write', 'Delete', 'Read', 'Get'],
                    default: ['Write', 'Delete', 'Read', 'Get']
                }
            }
        }
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
    userId: {
        type: Object,
        required: true,
        full_name: {
            type: String,
            required: true,
        },
        Alias: {
            type: String,
        },
        Permissions: {
            required: true,
            type: [String],
        }
    }
})

export const GroupRole = mongoose.model("GroupRole", GroupRoleSchema);